import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TopBar.css'; 

const TopBar = () => {
  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
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
    // Add logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className={`topbar ${hidden ? 'hidden' : ''}`}>
      <div className="nav-links">
        <Link to="/" className='topbar-link'>Main Page</Link>
        <Link to="/friend" className='topbar-link'>Friend</Link>
        <Link to="/chat" className='topbar-link'>Chat</Link>
      </div>
      <div className="user-section">
        <div className="user-info" onClick={handleProfileClick}>
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="user-avatar" />
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TopBar;
