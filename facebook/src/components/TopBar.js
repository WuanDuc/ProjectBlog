import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TopBar.css';
import { AuthContext } from '../hooks/AuthHook';

const TopBar = () => {
  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  
  const history = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setHidden(!visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleProfileClick = () => {
    history('/profile');
  };

  const handleLogout = () => {
    logout();
    setShowModal(false);
    history('/login');
  };

  return (
    <div>
      <div className={`topbar ${hidden ? 'hidden' : ''}`}>
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <Link to="/main" className='topbar-link'>Main Page</Link>
              <Link to="/friend" className='topbar-link'>Friend</Link>
              <Link to="/chat" className='topbar-link'>Chat</Link>
            </>
          ) : (
            <Link to="/" className='topbar-link'>Home</Link>
          )}
        </div>
        <div className="user-section">
          {isAuthenticated ? (
            <>
              <div className="user-info" onClick={handleProfileClick}>
                <img src="https://via.placeholder.com/40" alt="User Avatar" className="user-avatar" />
              </div>
              <button className="logout-button" onClick={() => setShowModal(true)}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="logout-button">Sign In</Link>
          )}
        </div>
      </div>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to log out?</h3>
            <div className="modal-buttons">
              <button className="modal-button cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="modal-button confirm-button" onClick={handleLogout}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
