const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");

// /api/v1/products
router.get(`/`, async (req, res) => {
  const orderList = await Order.find();

  if (!orderList) {
    res.status(500).json({ success: false });
  }
  res.send(orderList);
});

module.exports = router;
