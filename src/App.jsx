import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/userSlice';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import CustomErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import Projects from './components/Projects';
import Jobs from './components/Jobs';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ name: userName }));
    const user = currentUser;
    if (!user) {
      setError('User not found. Please try again.');
    } else {
      setError(null);
    }
  };

  if (!currentUser) {
    return (
      <div>
        <form onSubmit={handleLogin}>
          <label>
            Enter user name:
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setError(null);
              }}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }

  return (
    <Router>
      <CustomErrorBoundary>
        <Navbar userRole={currentUser.role} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <Protected userRole={currentUser.role}>
                <Projects />
              </Protected>
            }
          />
          <Route
            path="/jobs"
            element={
              <Protected userRole={currentUser.role}>
                <Jobs />
              </Protected>
            }
          />
        </Routes>
      </CustomErrorBoundary>
    </Router>
  );
};

export default App;
