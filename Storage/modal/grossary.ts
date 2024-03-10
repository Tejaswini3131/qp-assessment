import { DataTypes, Model } from "sequelize";
import db from '../config';

interface Grossary {
  id: number;
  product_id: number;
  product_name: string;
  mrp: number;
  category: string;
  discount: number;
  stock: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class GrossaryInstance extends Model<Grossary> {
  [x: string]: any;
}

GrossaryInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mrp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    tableName: 'grossary',
    timestamps: false
  }
);