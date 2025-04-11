import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav className="home-nav">
            <ul>
                <li><Link to="/recommendations">Vaccine Recommendations</Link></li>
                <li><Link to="/reports">Previous Reports</Link></li>
                <li><Link to="/contact">Contact Options</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;