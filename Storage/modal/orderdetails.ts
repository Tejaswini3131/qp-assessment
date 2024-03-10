import { DataTypes, Model } from "sequelize";
import db from '../config';

interface OrderDetails {
  id?: number;
  order_id: number;
  inv_id: number;
  final_price: number;
  qty: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class OrderDetailsInstance extends Model<OrderDetails> {}

OrderDetailsInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inv_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    final_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    qty: {
      type: DataTypes.NUMBER,
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
    tableName: 'order_details'
  }
);
