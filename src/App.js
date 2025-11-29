import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Delivery from './Delivery';
import Tracking from './Tracking';

export default function App(){
  return (
    <Router>
      <header className="site-header">
        <div className="container">
          <img src="/logo.png" alt="SwiftDrop" className="logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/delivery">Delivery</Link>
            <Link to="/tracking">Tracking</Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} SwiftDrop Delivery</footer>
    </Router>
  );
}
