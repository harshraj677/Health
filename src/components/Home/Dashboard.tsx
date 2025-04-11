import React, { useState } from 'react';
import './Dashboard.css'; // Custom CSS for styling

const Dashboard: React.FC = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('User Details:', { name, dob, extraInfo });
        setSubmitted(true);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-background">
                <div className="dashboard-content">
                    <h1>Welcome to VaxAI Bharat Dashboard</h1>
                    <p className="subtitle">Your Personalized Vaccine Healthcare Assistant</p>
                    <form onSubmit={handleSubmit} className="dashboard-form">
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </label>
                        <label>
                            Date of Birth:
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Additional Information (Optional):
                            <textarea
                                value={extraInfo}
                                onChange={(e) => setExtraInfo(e.target.value)}
                                placeholder="Enter any additional information"
                            ></textarea>
                        </label>
                        <button type="submit" className="dashboard-button">Submit</button>
                    </form>
                    {submitted && (
                        <div className="success-message">
                            <h3>Thank you, {name}!</h3>
                            <p>Your details have been submitted successfully.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;