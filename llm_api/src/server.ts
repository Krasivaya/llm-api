import express from 'express';
import axios from 'axios';
import { sequelize, Conversation } from './models';
import { error } from 'console';

const app = express();
app.use(express.json());

const URL = 'http://llm-app:8000';

app.post('/send_query', async (req, res) => {
  const { model, query } = req.body;
  try {
    const selectModelResponse = await axios.post(`${URL}/select_model`, { model });
    if (selectModelResponse.status !== 200) {
      return res.status(400).json(selectModelResponse.data);
    }

    const queryResponse = await axios.post(`${URL}/query`, { query });
    const conversation = await Conversation.create({
      model,
      history: queryResponse.data.history
    });

    res.json(conversation);
  } catch (error) {
    res.status(500).json({ error })
  }
});

app.get('/conversations', async (req, res) => {
  const conversations = await Conversation.findAll({
    order: [['createdAt', 'DESC']]
  });

  res.json(conversations);
});

app.get('/conversations/:id', async (req, res) => {
  const { id } = req.params;
  const conversation = await Conversation.findByPk(id);

  if (!conversation) {
    return res.status(404).json({ error: 'Conversation not found' });
  }

  res.json(conversation);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on port ${PORT}`);
});