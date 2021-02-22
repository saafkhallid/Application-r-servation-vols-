const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../bin/db');


const User = db.define('User', {
  Vile: {
    type: DataTypes.STRING
  },
  Heure: {
    type: DataTypes.STRING
  },
  Date: {
    type: DataTypes.STRING
  },
  Places: {
    type: DataTypes.STRING
  },
});

User.sync().then(() => {
  console.log('table created');
});
module.exports = User;