# LLM Project - Distributed LLM

### Developed By 👩🏽‍💻

[Carine SEMWAGA](https://github.com/Krasivaya)

### Description 📖

This project consists of two main components: a Python application and a Node.js API server. The Python application allows users to interact with LLM models (Llama2 and Mistral), and the Node.js API server provides endpoints to send queries to the Python application and manage conversation history.

### Technologies Used 💻

1. Python/Flask
2. Hugging Face Transformers
3. Node.js/Express.js
4. PostgreSQL/Sequelize
5. Docker

### Setup Requirements 🔗

- Create an .env file `cp .env-example .env`
- Set `.env` values for `DB_USER`, `DB_PASSWORD`, `DB_NAME`, and `DATABASE_URL`
- Build the Docker image `docker-compose up --build`

### Components 🏗️

[llm-app](./llm/)

[llm-api](./llm_api/)
