import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MiddlePage = () => {
    const [selectedState, setSelectedState] = useState('');
    const navigate = useNavigate();

    const handleExplore = () => {
        if (selectedState) {
            navigate(`/discover/${selectedState}/categories`);
        } else {
           
            alert('Please select a state.');
        }
    };

    
    const containerStyle = {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
        height: '100%', 
    };

    const boxStyle = {
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '400px',
    };

    const titleStyle = {
        color: '#a03135',
        marginBottom: '20px',
    };

    const selectStyle = {
        padding: '10px',
        width: '80%',
        margin: '20px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px 40px',
        backgroundColor: '#d2795a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <h1 style={titleStyle}>Discover India's Rich Heritage</h1>
                <p>Select a state to begin your interactive journey through its unique culture, historical sites, and vibrant traditions.</p>
                
                <div style={{ marginTop: '30px' }}>
                    <label htmlFor="state-select" style={{ display: 'block', marginBottom: '10px' }}>Choose a State:</label>
                    <select 
                        id="state-select" 
                        value={selectedState} 
                        onChange={(e) => setSelectedState(e.target.value)} 
                        style={selectStyle}
                    >
                        <option value="">-- Select a State --</option>
                        <option value="AndhraPradesh">Andhra Pradesh</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Maharashtra">Maharashtra</option>
                        {/* Add more states */}
                    </select>
                </div>
                
                <button onClick={handleExplore} style={buttonStyle}>Explore</button>
            </div>
        </div>
    );
};

export default MiddlePage;
