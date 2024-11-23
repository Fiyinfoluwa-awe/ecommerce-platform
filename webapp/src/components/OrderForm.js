import React, { useState } from "react";
import axios from 'axios';

const OrderForm = () => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/orders', {productId, quantity });
            alert('Order placed successfully');
        } catch (error) {
            alert('Order failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Place Order</h1>
            <div>
                <label>Product ID:</label>
                <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
        </form>
    );
};

export default OrderForm;