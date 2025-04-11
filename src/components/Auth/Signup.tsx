import React, { useState } from 'react';
import './Auth.css'; // Custom CSS for styling

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');

    const validatePasswordStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[@$!%*?&#]/.test(password)) strength++;
        setPasswordStrength(strength);
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!termsAccepted) {
            setError('You must accept the terms and conditions');
            return;
        }
        console.log('Signing up with:', { email, password });
        setError('');
    };

    return (
        <div className="auth-container">
            <h1>Signup</h1>
            <form onSubmit={handleSignup} className="auth-form">
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
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePasswordStrength(e.target.value);
                            }}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </label>
                <div className="password-strength">
                    <progress value={passwordStrength} max="5"></progress>
                    <p>
                        Password Strength: {['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][passwordStrength]}
                    </p>
                </div>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <label className="terms">
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    I accept the terms and conditions
                </label>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="auth-button">Signup</button>
            </form>
        </div>
    );
};

export default Signup;