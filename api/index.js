
// index.js 

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();
connectDB();


const app = express();
app.use(express.json());


// Import routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

//Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API')
});

//Use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));