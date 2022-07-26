import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Repository from './pages/Repository';
import { useContext } from 'react';
import UserProvider, { userContext } from './context/UserProvider';
import Protected from './components/Protected';

function App() {
  const { isAuthenticated } = useContext(userContext)
  console.log(isAuthenticated)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={
            <Protected isLoggedIn={isAuthenticated}>
              <Dashboard />
            </Protected>
          }></Route>
        </Routes>
        <Routes>
          <Route path="/users" element={
            <Protected isLoggedIn={isAuthenticated}>
              <User />
            </Protected>}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={
            <Protected isLoggedIn={isAuthenticated}>
              <Repository />
            </Protected>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
