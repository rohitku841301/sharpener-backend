const Sequelize = require('sequelize');
const sequelize = require('../database/db')

const Expense = sequelize.define('expense-tracker',{
    userId:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    amount: {
        type:Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type:Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Expense;