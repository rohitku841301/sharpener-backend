const Sequelize = require('sequelize');
const sequelize = require('../util/db')

const Cart = sequelize.define('cart',{
  cartId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = Cart;