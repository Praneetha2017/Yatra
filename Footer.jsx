import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#f8f8f8',
        padding: '10px 20px',
        textAlign: 'center',
        borderTop: '1px solid #eee',
        marginTop: '20px',
       
    };

    return (
        <footer style={footerStyle}>
            <p>© 2025 INSPIRE. All rights reserved.</p>
        </footer>
    );
};

export default Footer;