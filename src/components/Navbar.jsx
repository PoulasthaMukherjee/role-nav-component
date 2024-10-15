import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) return null;

  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/">Home</Link>
        </li>
        {currentUser.role === 'admin' && (
          <>
            <li style={{ marginRight: '1rem' }}>
              <Link to="/projects">Projects</Link>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <Link to="/jobs">Jobs</Link>
            </li>
          </>
        )}
        {currentUser.role === 'analyst' && (
          <li style={{ marginRight: '1rem' }}>
            <Link to="/jobs">Jobs</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;