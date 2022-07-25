import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Repository from './pages/Repository';

function App() {
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
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="/users" element={<User />}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Repository />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
