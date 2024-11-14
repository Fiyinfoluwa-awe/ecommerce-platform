
// controllers/userController.js

const Order = require('../models/Order');


exports.createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
};