import os
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
from flask import Flask, request, jsonify
from dotenv import dotenv_values

config = dotenv_values(".env")

app = Flask(__name__)

MODELS = {
  "llama2": "meta-llama/Llama-2-7b-hf",
  "mistral": "mistralai/Mistral-7B-v0.1"
}

model_name = None
tokenizer = None
model = None
conversation_history = []

token = config.get("TOKEN")
if token is None:
  raise ValueError("Token not found")

from huggingface_hub import login
login(token)

@app.route('/select_model', methods=['POST'])
def select_model():
  global model_name, tokenizer, model
  model_name = request.json['model']
  if model_name not in MODELS:
    return jsonify({"error": "Model not supported"}), 400
  tokenizer = AutoTokenizer.from_pretrained(MODELS[model_name])
  model = AutoModelForCausalLM.from_pretrained(MODELS[model_name])
  return jsonify({"message": f"Model {model_name} loaded successfully"}), 200

@app.route('/query', methods=['POST'])
def query():
  global conversation_history
  if model is None:
    return jsonify({"error": "Model not selected"}), 400

  user_input = request.json['query']
  conversation_history.append({"role": "user", "content": user_input})
  inputs = tokenizer(user_input, return_tensors='pt')
  outputs = model.generate(**inputs, max_length=512, pad_token_id=tokenizer.eos_token_id)
  response = tokenizer.decode(outputs[0], skip_special_tokens=True)
  conversation_history.append({"role": "model", "content": response})

  return jsonify({"response": response, "history": conversation_history}), 200

@app.route('/history', methods=['GET'])
def history():
  return jsonify(conversation_history), 200

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8000)