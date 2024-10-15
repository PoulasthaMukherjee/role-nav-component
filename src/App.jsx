import React, { useEffect } from 'react';
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

  useEffect(() => {
    const userName = window.prompt('Enter user name');
    dispatch(loginUser({ name: userName }));
  }, [dispatch]);

  if (!currentUser) {
    return <div>Loading...</div>;
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