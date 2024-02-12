const Sequelize = require('sequelize');
const sequelize = require('../util/db')

const CartItem = sequelize.define('cart-item',{
  cartItemId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.STRING
})

module.exports = CartItem;