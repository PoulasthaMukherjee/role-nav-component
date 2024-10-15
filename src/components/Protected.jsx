import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ userRole, children }) => {
  if (userRole === 'analyst' && window.location.pathname.startsWith('/projects')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;