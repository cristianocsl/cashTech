const express = require('express');
const { getOrders } = require('./order');

const router = express.Router({ mergeParams: true });

router.get('/', getOrders);

module.exports = router;