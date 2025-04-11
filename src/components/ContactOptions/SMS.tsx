import React from 'react';

const SMS: React.FC = () => {
    const handleSendSMS = () => {
        // Logic to send SMS
        alert("SMS feature is not implemented yet.");
    };

    return (
        <div>
            <h2>Contact via SMS</h2>
            <button onClick={handleSendSMS}>Send SMS</button>
        </div>
    );
};

export default SMS;