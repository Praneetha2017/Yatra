import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const mockUsers = new Map();

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        setError('');

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

       
        if (mockUsers.has(formData.username)) {
            setError('Username already taken. Please choose another.');
            return;
        }

        
        mockUsers.set(formData.username, {
            email: formData.email,
            password: formData.password,
            role: 'Cultural Enthusiast', 
        });

        console.log('User signed up successfully:', formData.username);
        
        
        navigate('/', { state: { message: 'Registration successful! Please log in.' } }); 
    };

    
    const containerStyle = { flexGrow: 1, backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 0', };
    const formBoxStyle = { backgroundColor: 'black', padding: '40px', borderRadius: '8px', width: '300px', textAlign: 'center', marginTop: '30px', };
    const inputStyle = { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #555', boxSizing: 'border-box', backgroundColor: '#444', color: 'white', };
    const buttonStyle = { width: '100%', padding: '10px', marginTop: '20px', backgroundColor: '#e0b533', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', };
    const errorStyle = { color: '#ff4d4d', marginTop: '10px' };

    return (
        <div style={containerStyle}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#e0b533' }}>Get Your Historic Trips Planned With Us</h1>
                <p>Embark on timeless journeys through India's glorious past. Discover monuments, legends, and cultures — all curated for your next unforgettable adventure.</p>
            </div>

            <div style={formBoxStyle}>
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} style={inputStyle} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} required />
                    
                    {error && <p style={errorStyle}>{error}</p>}

                    <button type="submit" style={buttonStyle}>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
