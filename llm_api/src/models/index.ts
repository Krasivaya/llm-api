import { Sequelize } from 'sequelize';
import { ConversationFactory } from './conversation';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:pwd@db:5432/llm_db', {dialect: 'postgres'})

const Conversation = ConversationFactory(sequelize);

export { sequelize, Conversation };