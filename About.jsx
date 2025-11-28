import React from 'react';

const About = () => {
    
    
    const containerStyle = {
        flexGrow: 1,
        backgroundColor: '#f8f8f8', 
        padding: '50px 20px',
        display: 'flex',
        justifyContent: 'center',
        height: '100%', 
    };

    const contentBoxStyle = {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        maxWidth: '800px',
        lineHeight: '1.6',
        textAlign: 'left',
    };

    const roleStyle = {
        marginBottom: '20px',
        paddingLeft: '20px',
        borderLeft: '4px solid #a03135',
    };

    return (
        <div style={containerStyle}>
            <div style={contentBoxStyle}>
                <h1 style={{ color: '#a03135', marginBottom: '20px', textAlign: 'center' }}>About Itihas Yatra</h1>
                <p style={{ fontSize: '1.1em', marginBottom: '30px', textAlign: 'center' }}>
                    **Itihas Yatra** is dedicated to fulfilling the mission to **Inspire awareness of Indian culture, heritage, historical places, and famous monuments.**
                </p>
                
                <p>
                    We provide an interactive web application that teaches users about India's rich historical sites and vibrant culture. Our platform offers **interactive features, virtual tours, and detailed information** to help everyone learn about and explore Indian heritage from anywhere in the world.
                </p>
                
                <h2 style={{ color: '#333', marginTop: '40px', marginBottom: '20px' }}>Our Core Roles</h2>

                <div style={roleStyle}>
                    <h3 style={{ color: '#555', marginTop: 0 }}>Cultural Enthusiast (User)</h3>
                    <p>
                        **Explore content, participate in virtual tours, and engage in cultural discussions.** This role benefits directly from the curated historical information and interactive experiences offered.
                    </p>
                </div>
                
                <div style={roleStyle}>
                    <h3 style={{ color: '#555', marginTop: 0 }}>Tour Guide</h3>
                    <p>
                        **Provide insights and detailed information during virtual tours, and answer user queries.** Guides register through our platform to offer expert knowledge and enhance the learning journey.
                    </p>
                </div>
                
                <div style={roleStyle}>
                    <h3 style={{ color: '#555', marginTop: 0 }}>Content Creator</h3>
                    <p>
                        Responsible for developing and updating educational content, creating interactive features, and managing virtual tours to keep the information current and engaging.
                    </p>
                </div>
                
                <div style={roleStyle}>
                    <h3 style={{ color: '#555', marginTop: 0 }}>Admin</h3>
                    <p>
                        Manages all content and user interactions, ensures the accuracy of information, and oversees the approval of new Tour Guide applications.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;
