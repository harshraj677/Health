import React from 'react';

const WhatsApp: React.FC = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '1234567890'; // Replace with actual phone number
        const message = 'Hello! I would like more information about vaccines.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <button onClick={handleWhatsAppClick}>
                Contact via WhatsApp
            </button>
        </div>
    );
};

export default WhatsApp;