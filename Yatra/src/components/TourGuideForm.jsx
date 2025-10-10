import React, { useState } from 'react';

const TourGuideForm = () => {
  
    const [mode, setMode] = useState('Register'); 
    
    
    const [registrationData, setRegistrationData] = useState({
        state: 'Andhra Pradesh',
        language: 'English',
        name: '',
        experience: '',
        contact: '',
        availability: [],
        specialization: [],
    });

    
    const [requestData, setRequestData] = useState({
        state: 'Andhra Pradesh',
        language: 'English',
        gender: '',
        specialization: [],
    });

    const specializationOptions = ['History', 'Nature', 'Culture', 'Food Tours', 'Architecture'];
    const genderOptions = ['Male', 'Female', 'Prefer Not To Say'];

    

    const handleRegisterChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            const listName = name.startsWith('availability') ? 'availability' : 'specialization';
            setRegistrationData(prev => {
                const currentList = prev[listName];
                if (checked) {
                    return { ...prev, [listName]: [...currentList, value] };
                } else {
                    return { ...prev, [listName]: currentList.filter(item => item !== value) };
                }
            });
        } else {
            setRegistrationData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleRequestChange = (e) => {
        const { name, value } = e.target;
        setRequestData(prev => ({ ...prev, [name]: value }));
    };

    const handleSpecializationRequestChange = (e) => {
        const { value, checked } = e.target;
        setRequestData(prev => {
            const currentList = prev.specialization;
            if (checked) {
                return { ...prev, specialization: [...currentList, value] };
            } else {
                return { ...prev, specialization: currentList.filter(item => item !== value) };
            }
        });
    };


    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Tour Guide Registration Data:', registrationData);
       
        alert(`Registration for ${registrationData.name} submitted successfully!`);
    };

    const handleRequestSubmit = (e) => {
        e.preventDefault();
        console.log('Tour Guide Request Data:', requestData);
        
        alert(`Your request for a guide in ${requestData.state} has been submitted!`);
    };

   

    const containerStyle = {
        flexGrow: 1,
        backgroundColor: '#a9a9a9', 
        padding: '50px 0',
        display: 'flex',
        justifyContent: 'center',
        height: '100%', 
    };

    const formBoxStyle = {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '600px',
    };

    const inputGroupStyle = {
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const labelStyle = {
        width: '180px', 
        fontWeight: '600',
    };

    const inputStyle = {
        flexGrow: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const selectStyle = {
        ...inputStyle,
        flexGrow: 1,
    };
    
    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: 'white',
    };

    const specializationBoxStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        flexGrow: 1,
    };
    
   

    const renderRegistrationForm = () => (
        <form onSubmit={handleRegisterSubmit}>
            
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="reg-state">Select State</label>
                <select id="reg-state" name="state" value={registrationData.state} onChange={handleRegisterChange} style={selectStyle}>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
            </div>

          
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="reg-language">Select Language</label>
                <select id="reg-language" name="language" value={registrationData.language} onChange={handleRegisterChange} style={selectStyle}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                </select>
            </div>

            
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="reg-name">Tour Guide Name</label>
                <input type="text" id="reg-name" name="name" placeholder="Enter name" value={registrationData.name} onChange={handleRegisterChange} style={inputStyle} required />
            </div>

           
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="reg-experience">Experience (years)</label>
                <input type="number" id="reg-experience" name="experience" placeholder="e.g. 5" value={registrationData.experience} onChange={handleRegisterChange} style={inputStyle} required />
            </div>

           
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="reg-contact">Contact Number</label>
                <input type="tel" id="reg-contact" name="contact" placeholder="+91 9876543210" value={registrationData.contact} onChange={handleRegisterChange} style={inputStyle} required />
            </div>

           
            <div style={{ ...inputGroupStyle, alignItems: 'flex-start' }}>
                <label style={labelStyle}>Availability</label>
                <div style={{ flexGrow: 1, display: 'flex', gap: '20px' }}>
                    {['Morning', 'Afternoon', 'Evening'].map(time => (
                        <label key={time}>
                            <input 
                                type="checkbox" 
                                name="availability" 
                                value={time} 
                                checked={registrationData.availability.includes(time)} 
                                onChange={handleRegisterChange} 
                            /> 
                            {time}
                        </label>
                    ))}
                </div>
            </div>

           
            <div style={{ ...inputGroupStyle, alignItems: 'flex-start' }}>
                <label style={labelStyle}>Specialization</label>
                <div style={specializationBoxStyle}>
                    {specializationOptions.map(spec => (
                        <label key={spec} style={{ display: 'block' }}>
                            <input 
                                type="checkbox" 
                                name="specialization" 
                                value={spec} 
                                checked={registrationData.specialization.includes(spec)} 
                                onChange={handleRegisterChange} 
                            /> 
                            {spec}
                        </label>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button type="submit" style={{ ...buttonStyle, backgroundColor: '#a03135', padding: '10px 50px' }}>Register</button>
            </div>
        </form>
    );

    const renderRequestForm = () => (
        <form onSubmit={handleRequestSubmit}>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <h3 style={{color: '#d2795a'}}>What kind of Tour Guide do you need?</h3>
            </div>
            
            {/* Locality (State) */}
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="req-state">Select State (Locality)</label>
                <select id="req-state" name="state" value={requestData.state} onChange={handleRequestChange} style={selectStyle}>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
            </div>

            {/* Language */}
            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="req-language">Select Language</label>
                <select id="req-language" name="language" value={requestData.language} onChange={handleRequestChange} style={selectStyle}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                </select>
            </div>

            {/* Gender */}
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Preferred Gender</label>
                <div style={{ flexGrow: 1, display: 'flex', gap: '20px' }}>
                    {genderOptions.map(g => (
                        <label key={g}>
                            <input 
                                type="radio" 
                                name="gender" 
                                value={g} 
                                checked={requestData.gender === g}
                                onChange={handleRequestChange} 
                                required
                            /> 
                            {g}
                        </label>
                    ))}
                </div>
            </div>
            
            {/* Specialization */}
            <div style={{ ...inputGroupStyle, alignItems: 'flex-start' }}>
                <label style={labelStyle}>Specialized In</label>
                <div style={specializationBoxStyle}>
                    {specializationOptions.map(spec => (
                        <label key={spec} style={{ display: 'block' }}>
                            <input 
                                type="checkbox" 
                                name="specialization" 
                                value={spec} 
                                checked={requestData.specialization.includes(spec)} 
                                onChange={handleSpecializationRequestChange} 
                            /> 
                            {spec}
                        </label>
                    ))}
                </div>
            </div>


            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button type="submit" style={{ ...buttonStyle, backgroundColor: '#1E90FF', padding: '10px 50px' }}>Find My Guide</button>
            </div>
        </form>
    );


    return (
        <div style={containerStyle}>
            <div style={formBoxStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                    {mode === 'Register' ? 'Tour Guide Registration' : 'Tour Guide Request'}
                </h2>

                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <button 
                        style={{ 
                            ...buttonStyle, 
                            backgroundColor: mode === 'Register' ? '#4CAF50' : '#ccc', // Green when active
                            color: mode === 'Register' ? 'white' : 'black',
                        }}
                        onClick={() => setMode('Register')}
                    >
                        Register as Tour Guide
                    </button>
                    <button 
                        style={{ 
                            ...buttonStyle, 
                            backgroundColor: mode === 'Request' ? '#1E90FF' : '#ccc', // Blue when active
                            color: mode === 'Request' ? 'white' : 'black',
                        }}
                        onClick={() => setMode('Request')}
                    >
                        Need a Tour Guide
                    </button>
                </div>

                {mode === 'Register' ? renderRegistrationForm() : renderRequestForm()}

            </div>
        </div>
    );
};

export default TourGuideForm;
