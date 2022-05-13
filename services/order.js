const { Order } = require('../models');

module.exports.getOrders = async () => {
  const orders = await Order.findAll();

  return orders;
};