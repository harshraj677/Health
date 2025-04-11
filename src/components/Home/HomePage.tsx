import React from 'react';
import './HomePage.css'; // Assuming you have a CSS file for styling
import Header from './Header'; // Corrected path
import Footer from './Footer'; // Corrected path
import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const HomePage: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="home-container">
            <Header />
            <div className="user-menu">
                <IconButton onClick={handleMenuOpen}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Login</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Learn News</MenuItem>
                </Menu>
            </div>
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