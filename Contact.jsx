import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Contact Form Submitted:', formData);
        
        
        setStatus('success');
        setTimeout(() => {
            setStatus('');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
        
    };

    const containerStyle = {
        flexGrow: 1,
        backgroundColor: '#f8f8f8', 
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%', 
    };

    const contentBoxStyle = {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        maxWidth: '700px',
        width: '100%',
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
    };

    const formGroupStyle = {
        marginBottom: '15px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginTop: '5px',
    };

    const buttonStyle = {
        padding: '12px 30px',
        backgroundColor: '#a03135', 
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '15px',
        transition: 'background-color 0.2s',
    };
    
    const infoItemStyle = {
        marginBottom: '15px',
        fontSize: '1.05em',
        color: '#555',
    };


    return (
        <div style={containerStyle}>
            <h1 style={{ color: '#a03135', marginBottom: '40px' }}>Contact Us</h1>

            <div style={contentBoxStyle}>
                
                <div style={{ flex: '1 1 30%', minWidth: '250px' }}>
                    <h3 style={{ color: '#333', borderBottom: '2px solid #a03135', paddingBottom: '10px' }}>Get in Touch</h3>
                    
                    <div style={infoItemStyle}>
                        <strong>Email:</strong><br/> support@itihasyatra.in
                    </div>
                    
                    <div style={infoItemStyle}>
                        <strong>Phone:</strong><br/> +91 99887 76655
                    </div>
                    
                    <div style={infoItemStyle}>
                        <strong>Address:</strong><br/> INSPIRE Heritage Foundation,<br/> 101 Culture Complex, New Delhi 110001, India
                    </div>
                </div>

                <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
                    <h3 style={{ color: '#333', borderBottom: '2px solid #a03135', paddingBottom: '10px' }}>Send a Message</h3>
                    
                    <form onSubmit={handleSubmit}>
                        <div style={formGroupStyle}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
                        </div>
                        
                        <div style={formGroupStyle}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                        </div>
                        
                        <div style={formGroupStyle}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} style={inputStyle} required />
                        </div>
                        
                        <div style={formGroupStyle}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} required></textarea>
                        </div>
                        
                        {status === 'success' ? (
                            <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>Message sent successfully!</p>
                        ) : (
                            <button type="submit" style={buttonStyle}>Send Message</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
