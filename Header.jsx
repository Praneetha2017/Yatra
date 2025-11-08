import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    const isAuthPage = location.pathname === '/' || location.pathname === '/signup';
    
    const headerStyle = {
        backgroundColor: isAuthPage ? '#333' : '#a03135',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        flexShrink: 0, 
    };

    const navLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px',
    };

    const brandStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white',
    };

    return (
        <header style={headerStyle}>
            <Link to={isAuthPage ? '/' : '/discover'} style={brandStyle}>Itihas Yatra</Link>
            
          
            {!isAuthPage && (
                <nav>
                    <Link to="/discover" style={navLinkStyle}>Home</Link>
                    <Link to="/admin" style={navLinkStyle}>Admin</Link>
                    <Link to="/tourguide/register" style={navLinkStyle}>Tour Guide</Link>
                    <Link to="/womensafety/register" style={navLinkStyle}>Women Safety Registrations</Link>
                    <Link to="/about" style={navLinkStyle}>About</Link>
                    <Link to="/contact" style={navLinkStyle}>Contact</Link>
                </nav>
            )}

            {isAuthPage && (
                <div>
                    <Link 
                        to="/" 
                        style={{ 
                            ...navLinkStyle, 
                            background: location.pathname === '/' ? '#e0b533' : 'none', 
                            border: location.pathname === '/' ? 'none' : '1px solid white',
                            padding: '5px 10px', 
                            color: location.pathname === '/' ? 'black' : 'white',
                            cursor: 'pointer',
                            display: 'inline-block',
                        }}
                    >
                        Login
                    </Link>
                    <Link 
                        to="/signup" 
                        style={{ 
                            ...navLinkStyle, 
                            background: location.pathname === '/signup' ? '#e0b533' : 'none', 
                            border: location.pathname === '/signup' ? 'none' : '1px solid white', 
                            padding: '5px 10px', 
                            color: location.pathname === '/signup' ? 'black' : 'white',
                            cursor: 'pointer',
                            display: 'inline-block',
                        }}
                    >
                        Signup
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;