import React from 'react';
import './HomePage.css';
import Header from './Header';
import Footer from './Footer';
import {
  Vaccines,
  MedicalServices,
  LocalHospital,
  Favorite,
} from '@mui/icons-material';
import { FaSyringe } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to VaxAI Bharat</h1>
          <p>Your trusted partner in vaccination and healthcare management.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Vaccines className="feature-icon" />
              <h3>Vaccination Tracker</h3>
              <p>Track your vaccination schedules and stay updated.</p>
            </div>
            <div className="feature-card">
              <MedicalServices className="feature-icon" />
              <h3>Expert Advice</h3>
              <p>Get advice from healthcare professionals.</p>
            </div>
            <div className="feature-card">
              <LocalHospital className="feature-icon" />
              <h3>Nearby Centers</h3>
              <p>Find vaccination centers near you.</p>
            </div>
            <div className="feature-card">
              <Favorite className="feature-icon" />
              <h3>Health Insights</h3>
              <p>Access personalized health insights and reports.</p>
            </div>
          </div>
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
