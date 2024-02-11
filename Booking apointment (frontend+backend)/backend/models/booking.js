const Sequelize = require('sequelize');
const sequelize = require('../database/db')

const Booking = sequelize.define('bookingdata',{
    userId:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Booking;