const { Order, Buyer, Provider } = require('../models');
const { convertDateFormat, setProperties } = require('./utilities');

module.exports.getOrders = async () => {
  const orders = await Order.findAll({
    include: [
      { model: Buyer, as: 'buyer', attributes: ['name'] },
      { model: Provider, as: 'provider', attributes: ['name'] },
    ],
  });

  const ordersFormatted = await convertDateFormat(orders);
  const result = setProperties(ordersFormatted);
  return result;
};