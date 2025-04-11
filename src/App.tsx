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
import './assets/styles/global.css';

const SignInSignOut: React.FC = () => {
    return <div>Sign In / Sign Out Page</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin-signout" element={<SignInSignOut />} />
        <Route path="/recommendations" element={<VaccineRecommendations />} />
        <Route path="/reports" element={<PreviousReports />} />
        <Route path="/contact/whatsapp" element={<WhatsApp />} />
        <Route path="/contact/sms" element={<SMS />} />
        <Route path="/contact/call" element={<Call />} />
      </Routes>
    </Router>
  );
};

export default App;