import React from 'react';

const Call: React.FC = () => {
    const handleCall = () => {
        window.open('tel:+1234567890'); // Replace with the actual phone number
    };

    return (
        <div>
            <button onClick={handleCall} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
                Call Us
            </button>
        </div>
    );
};

export default Call;