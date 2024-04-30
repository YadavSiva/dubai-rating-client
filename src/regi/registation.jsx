import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './registation.css'
export function Registration(item) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/register', { firstName, lastName, email, password });
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify({ email }));
            // Redirect after successful registration
            navigate("/login");
            alert("registration sucessfull")
        } catch (error) {
            setError("Registration failed. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Registration</h2>

            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='firstname'
                 value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                   />
                  <input type="text" 
                  placeholder='lastname'
                  value={lastName}
                   onChange={(e) => setLastName(e.target.value)}
                   required
                   />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};
