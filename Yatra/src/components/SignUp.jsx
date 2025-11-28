// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const mockUsers = new Map();

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'User',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (mockUsers.has(formData.username)) {
            setError('Username already exists.');
            return;
        }

        mockUsers.set(formData.username, {
            email: formData.email,
            password: formData.password,
            role: formData.role,
        });

        navigate('/login');
    };

    return (
        <div style={{
            backgroundColor: '#F5F0E6',
            minHeight: '100vh',
            paddingTop: '40px'
        }}>

            {/* CARD ONLY */}
            <div style={{
                backgroundColor: '#1F2E2E',
                padding: '40px',
                width: '350px',
                margin: '0 auto',
                borderRadius: '12px',
                border: '2px solid #A06A43',
                color: 'white',
                boxShadow: '0px 8px 18px rgba(0,0,0,0.35)',
            }}>

                <h2 style={{ textAlign: 'center', color: '#E35A37' }}>
                    Create an Account
                </h2>

                <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    “Your journey across India begins here.”
                </p>

                <form onSubmit={handleSignup}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>

                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <button type="submit" style={buttonStyle}>
                        Signup
                    </button>

                </form>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '12px 0',
    borderRadius: '6px',
    border: '1px solid #A06A43',
    backgroundColor: '#F0ECE3',
    color: '#102027',
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    backgroundColor: '#CF8F2E',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    color: '#102027',
    cursor: 'pointer',
};

export default Signup;
