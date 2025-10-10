import React from 'react';

const AdminPanel = () => {
    
    const registeredGuides = [
        { id: 1, name: 'John Doe', state: 'Kerala', language: 'English', experience: '5 years', contact: '+91 9876543210' },
        { id: 2, name: 'Priya Sharma', state: 'Maharashtra', language: 'Hindi', experience: '3 years', contact: '+91 9123456780' },
        { id: 3, name: 'Ravi Kumar', state: 'Rajasthan', language: 'Telugu', experience: '7 years', contact: '+91 9988776655' },
    ];

    const handleView = (guide) => {
        alert(`Viewing details for: ${guide.name}`);
       
    };

    
    const containerStyle = {
        minHeight: '80vh',
        padding: '50px 20px',
        textAlign: 'center',
    };

    const tableStyle = {
        width: '90%',
        margin: '30px auto',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        backgroundColor: '#ffaa66', 
        color: 'white',
        padding: '12px',
        textAlign: 'left',
        border: '1px solid #ddd',
    };

    const tdStyle = {
        padding: '12px',
        textAlign: 'left',
        border: '1px solid #ddd',
    };

    const rowStyle = {
        backgroundColor: '#f9f9f9',
    };

    const actionButtonStyle = {
        padding: '8px 15px',
        backgroundColor: '#1E90FF', 
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ color: '#a03135' }}>Itihas Yatra - Admin Panel</h1>
            <h2 style={{ marginBottom: '30px' }}>Registered Tour Guides</h2>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>State</th>
                        <th style={thStyle}>Language</th>
                        <th style={thStyle}>Experience</th>
                        <th style={thStyle}>Contact</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredGuides.map(guide => (
                        <tr key={guide.id} style={rowStyle}>
                            <td style={tdStyle}>{guide.name}</td>
                            <td style={tdStyle}>{guide.state}</td>
                            <td style={tdStyle}>{guide.language}</td>
                            <td style={tdStyle}>{guide.experience}</td>
                            <td style={tdStyle}>{guide.contact}</td>
                            <td style={tdStyle}>
                                <button 
                                    style={actionButtonStyle} 
                                    onClick={() => handleView(guide)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;