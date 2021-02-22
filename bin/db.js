const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vol', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;