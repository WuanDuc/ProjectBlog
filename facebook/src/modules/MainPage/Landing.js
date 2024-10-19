// src/components/LandingPage.js
import React,{ useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Landing.css"
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import { AuthContext } from '../../hooks/AuthHook';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null; // Redirecting to main page, so no need to render landing page
  }
  return (
    <div className="page-container">
      <div className="main-section">
        <h1 className="title">Welcome to MyBlog</h1>
        <h2 className="subtitle">Share your stories with the world</h2>
        <div className="button-container">
          <Link className="styled-link" to="/signup">Get Started</Link>
          <Link className="styled-link" to="/login">Login</Link>
        </div>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3 className="feature-title">Create Posts</h3>
          <p className="feature-description">Share your thoughts and experiences with an easy-to-use editor.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Connect</h3>
          <p className="feature-description">Engage with other users through comments and likes.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Customize</h3>
          <p className="feature-description">Personalize your profile and blog to match your style.</p>
        </div>
      </div>
      <Footer />
    </div>  );
};

export default LandingPage;
