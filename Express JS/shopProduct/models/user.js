const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const User = sequelize.define('user',{
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: Sequelize.STRING
})

module.exports = User;