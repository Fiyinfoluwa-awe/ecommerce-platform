
// controllers/userControllers.js

const User = require('../models/User');


exports.registerUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
};