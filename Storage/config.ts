// Import required modules
const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance
const db = new Sequelize('qp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
