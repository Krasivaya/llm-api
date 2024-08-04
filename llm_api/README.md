# LLM Node.js API Server

### Description 📖

This is a Node.js API server using Express.js and Sequelize for managing interactions with the LLM python application and storing conversation history in PostgreSQL.

### Technologies Used 💻

1. Node.js/Express.js
2. PostgreSQL/Sequelize
3. Docker

### Endpoints Used 📍

| Endpoint            | Method | Description                             |
| ------------------- | ------ | --------------------------------------- |
| /send_query         | POST   | Sends a query to the Python application |
| /conversations      | GET    | Lists all conversations                 |
| /conversations/{id} | GET    | Retrieves a specific conversation        |

### Setup Requirements 🔗

- Create an .env file `cp .env-example .env`
- Set `.env` values for `DATABASE_URL`

### Developed By 👩🏽‍💻

[Carine SEMWAGA](https://github.com/Krasivaya)
