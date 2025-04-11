import React from 'react';
import './HomePage.css'; // Assuming you have a CSS file for styling
import Header from './Header'; // Corrected path
import Footer from './Footer'; // Corrected path

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <Header />
            <main className="main-content">
                <section className="info-section">
                    <h2>Welcome to Vaccine Tracker</h2>
                    <p>Stay informed about vaccines for newborns, children, and aged people.</p>
                    <button className="cta-button">Learn More</button>
                </section>
                <section className="image-section">
                    <img
                        src="https://images.unsplash.com/photo-1586772004900-5c6f6d1d88b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        alt="Vaccination Awareness"
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;