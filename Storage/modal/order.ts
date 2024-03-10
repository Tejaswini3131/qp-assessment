import { DataTypes, Model } from "sequelize";
import db from '../config';

interface Order {
  id?: number;
  order_id: string;
  user_id: number;
  total_amnt: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class OrderInstance extends Model<Order> {}

OrderInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    total_amnt: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize: db,
    tableName: 'orders'
  }
);