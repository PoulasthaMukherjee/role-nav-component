import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  if (currentUser.role === 'analyst' && location.pathname.startsWith('/projects')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
