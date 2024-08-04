# LLM Project Application

### Description 📖

This is a Python application using Flask that allows users to select and interact with LLM models (Llama2 and Mistral). The application maintains the context of the conversation and can be interacted via API endpoints.

### Technologies Used 💻

1. Python/Flask
2. Hugging Face Transformers
3. Docker

### Endpoints Used 📍

| Endpoint          | Method | Description                              |
| ----------------- | ------ | ---------------------------------------- |
| /select_model     | POST   | Selects an LLM model (Llama2 or Mistral) |
| /query            | POST   | Sends a query to the selected model      |
| /history          | GET    | Retrieves the conversation history       |

### Setup Requirements 🔗

- Create an `.env` file `cp .env-example .env`
- Set `.env` values for `TOKEN` 

### Developed By 👩🏽‍💻

[Carine SEMWAGA](https://github.com/Krasivaya)
