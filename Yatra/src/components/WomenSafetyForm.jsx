import React, { useState } from 'react';

const WomenSafetyForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        location: '',
        emergencyContact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Women Safety Registration Data:', formData);
        alert('Safety Registration Submitted!');
       
    };

    
    const containerStyle = {
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8', 
    };

    const formBoxStyle = {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '450px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0 20px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#a03135', 
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={formBoxStyle}>
                <h2 style={{ color: '#a03135', marginBottom: '30px' }}>Women Safety Registration</h2>
                <form onSubmit={handleSubmit}>
                    
                    <label style={labelStyle} htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} style={inputStyle} required />

                    <label style={labelStyle} htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} style={inputStyle} required />

                    <label style={labelStyle} htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} style={inputStyle} required />

                    <label style={labelStyle} htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter your city/location" value={formData.location} onChange={handleChange} style={inputStyle} required />

                    <label style={labelStyle} htmlFor="emergencyContact">Emergency Contact</label>
                    <input type="tel" id="emergencyContact" name="emergencyContact" placeholder="Enter emergency contact number" value={formData.emergencyContact} onChange={handleChange} style={inputStyle} required />

                    <button type="submit" style={buttonStyle}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default WomenSafetyForm;