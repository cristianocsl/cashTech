const { getOrders: getAll } = require('../services/order');

module.exports.getOrders = async (_req, res) => {
  try {
    const orders = await getAll();
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};