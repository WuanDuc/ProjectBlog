import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Navigate to UserInfo page with signup data
    navigate('/info', { state: { name, email, password } });
  };

  return (
    <div className="auth-page">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo-image" />
        <h1 className="app-name">MyApp</h1>
      </div>
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group password-group">
          <label>Password:</label>
          <input 
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span 
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-link">
          Already have an account? <Link to="/login">Login now</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
