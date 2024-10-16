import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Home</button>
  </div>
);

const CustomErrorBoundary = ({ children }) => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate('/')}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
