import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/SignUp.jsx';


const App = () => {
  return (
    // The 'App' class (defined in index.css) uses Flexbox to manage Header, Content, and Footer.
    <div className="App"> 
      <Router>
        <Header />
        
        {/* This wrapper uses style={{ flexGrow: 1 }} to take up all the remaining vertical space. 
          This is crucial for the full-screen effect on pages like MiddlePage, Login, and Signup. 
        */}
        <div style={{ flexGrow: 1 }}> 
          <Routes>
            {/* Authentication Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Main Content & Exploration Routes */}
            <Route path="/discover" element={<MiddlePage />} />
            <Route path="/discover/:state/categories" element={<InnerPage />} />
            
            {/* Service & Admin Routes */}
            <Route path="/tourguide/register" element={<TourGuideForm />} />
            <Route path="/womensafety/register" element={<WomenSafetyForm />} />
            <Route path="/admin" element={<AdminPanel />} />
            
            {/* Information Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Fallback Route */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;
