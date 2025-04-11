import React, { useState } from 'react';
import './Auth.css'; // Custom CSS for styling
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import visibility icons

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        console.log('Logging in with:', { email, password });
        setError('');
    };

    const handleGoogleLogin = () => {
        console.log('Logging in with Google');
        // Add Google login logic here
    };

    return (
        <div className="auth-container">
            <div className="auth-background">
                <div className="auth-content">
                    <h2>Welcome!</h2>
                    <h1>VaxAI Bharat</h1>
                    <p className="subtitle">Your Trusted Vaccination Assistant</p>
                    <form onSubmit={handleLogin} className="auth-form">
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <div className="password-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="toggle-password-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </span>
                            </div>
                        </label>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="auth-button">Login</button>
                    </form>
                    <div className="divider">OR</div>
                    <button className="google-login-button" onClick={handleGoogleLogin}>
                        Login with Google
                    </button>
                    <p className="signup-prompt">
                        Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;