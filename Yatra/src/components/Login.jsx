// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from './SignUp';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = mockUsers.get(username);

        if (!user) {
            alert("User not found!");
            return;
        }

        if (user.password !== password) {
            alert("Incorrect password!");
            return;
        }

        if (user.role === "Admin") navigate("/admin");
        else navigate("/discover");
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
                    Welcome Back
                </h2>

                <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    “Continue your journey through India’s heritage.”
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        style={inputStyle}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                        required
                    />

                    <button type="submit" style={buttonStyle}>
                        Login
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

export default Login;
