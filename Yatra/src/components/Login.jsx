import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
       
        navigate('/discover'); 
    };

    const containerStyle = {
        
        flexGrow: 1, 
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 0',
    };

    const formBoxStyle = {
        backgroundColor: 'black',
        padding: '40px',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'center',
        marginTop: '30px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #555',
        boxSizing: 'border-box',
        backgroundColor: '#444',
        color: 'white',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        marginTop: '20px',
        backgroundColor: '#e0b533',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#e0b533' }}>Get Your Historic Trips Planned With Us</h1>
                <p>Embark on timeless journeys through India's glorious past. Discover monuments, legends, and cultures — all curated for your next unforgettable adventure.</p>
            </div>
            
            <div style={formBoxStyle}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" required style={inputStyle} />
                    <input type="password" placeholder="Password" required style={inputStyle} />
                    <button type="submit" style={buttonStyle}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;