import React, { useState } from "react";
import axios from 'axios';
import Logo from "./Logo";
import '../styles.css';



const OrderForm = () => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/orders', { productId, quantity });
            console.log(response.data); // Log the server's response
            alert('Order placed successfully!');
        } catch (error) {
            console.error(error); // Log the error for debugging
            alert('Order failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Logo />
            <h1>Place Order</h1>
            <div>
                <label>Product ID:</label>
                <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;