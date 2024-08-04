import { DataTypes, Sequelize, Model } from "sequelize";

export class Conversation extends Model {
  public id!: number;
  public model!: string;
  public history!: object;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const ConversationFactory = (sequelize: Sequelize) => {
  Conversation.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    history: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'conversations',
    timestamps: true,
  });

  return Conversation;
};