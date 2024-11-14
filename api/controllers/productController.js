
// controllers/productControllers.js

const Product = require('../models/Product');


exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};


exports.createProducts =async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save ();
    res.json(newProduct);
};