
// models/Product.js

const mongoose = require ('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
});


modules.exports = mongoose.model('Product', productSchema);