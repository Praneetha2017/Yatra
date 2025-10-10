import React from 'react';
import { useParams } from 'react-router-dom';

const InnerPage = () => {
    // Get the state parameter from the URL
    const { state } = useParams();

    // Basic styling for the category cards
    const containerStyle = {
        minHeight: '80vh',
        textAlign: 'center',
        padding: '50px 20px',
    };

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '40px',
        flexWrap: 'wrap',
    };

    const cardStyle = {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '280px',
        textAlign: 'left',
        cursor: 'pointer',
        border: '1px solid #eee',
    };

    const iconStyle = {
        fontSize: '30px',
        marginBottom: '15px',
    };

    const categories = [
        { title: '1. Historical Monuments & Sites', description: 'Explore majestic forts, intricate temples, and timeless historical monuments that tell the story of India\'s past.', icon: '☀️' },
        { title: '2. Traditions & Festivals', description: 'Learn about vibrant festivals, ancient rituals, and daily traditions that form the soul of Indian society.', icon: '🔒' },
        { title: '3. Art, Music & Dance', description: 'Dive into a world of classical art, soulful music, and graceful dance forms that are centuries in the making.', icon: '🎧' },
        // Add more categories
    ];

    return (
        <div style={containerStyle}>
            <h1>Discover India's Rich Heritage</h1>
            {state && <h2 style={{color: '#a03135'}}>Exploring: {state}</h2>}
            <p>Select a category to begin your immersive journey through the heart of Indian culture.</p>
            
            <div style={cardContainerStyle}>
                {categories.map((category, index) => (
                    <div key={index} style={cardStyle}>
                        <div style={iconStyle}>{category.icon}</div>
                        <h3>{category.title}</h3>
                        <p style={{ fontSize: '14px', color: '#555' }}>{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InnerPage;