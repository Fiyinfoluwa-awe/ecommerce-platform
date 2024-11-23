import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                    <strong>{product.name}</strong>: ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ProductList;