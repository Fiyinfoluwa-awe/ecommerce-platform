import React, { useState } from "react";
import axios from 'axios';
import Logo from '../Logo';
import '../styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log(response.data); // Log or use the response data
            alert('Login successful!');
        }   catch (error) {
            console.error(error);  // Log the error
            alert('Login failed!');
        }
    };

    return (
        <>
            <Logo />
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;