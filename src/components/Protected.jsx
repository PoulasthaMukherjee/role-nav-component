import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Protected = ({ userRole, children }) => {
  const location = useLocation();
  if (userRole === 'analyst' && location.pathname.startsWith('/projects')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
