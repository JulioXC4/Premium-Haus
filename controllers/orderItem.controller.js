const OrderItem = require("../models/OrderItem");
const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrderItem = async (req, res) => {
  try {
    const item = await OrderItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrderItems = async (_req, res) => {
  const items = await OrderItem.findAll({ include: [Order, Product] });
  res.json(items);
};
