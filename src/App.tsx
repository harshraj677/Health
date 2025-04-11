import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import VaccineRecommendations from './components/Recommendations/VaccineRecommendations';
import PreviousReports from './components/Reports/PreviousReports';
import WhatsApp from './components/ContactOptions/WhatsApp';
import SMS from './components/ContactOptions/SMS';
import Call from './components/ContactOptions/Call';
import Dashboard from './components/Home/Dashboard'; // Corrected path
import './assets/styles/global.css';

const SignInSignOut: React.FC = () => {
    return <div>Sign In / Sign Out Page</div>;
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Home Page */}
                <Route path="/" element={<HomePage />} />

                {/* Authentication Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin-signout" element={<SignInSignOut />} />

                {/* Vaccine Recommendations */}
                <Route path="/recommendations" element={<VaccineRecommendations />} />

                {/* Reports */}
                <Route path="/reports" element={<PreviousReports />} />

                {/* Contact Options */}
                <Route path="/contact/whatsapp" element={<WhatsApp />} />
                <Route path="/contact/sms" element={<SMS />} />
                <Route path="/contact/call" element={<Call />} />

                {/* Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} /> {/* Added Dashboard route */}
            </Routes>
        </Router>
    );
};

export default App;