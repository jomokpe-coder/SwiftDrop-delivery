import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Track from './pages/Track';
import Contact from './pages/Contact';

export default function App(){
  return (
    <Router>
      <header className="header">
        <div className="container header-inner">
          <img src="%PUBLIC_URL%/logo-swiftdrop.png" alt="SwiftDrop" className="logo" />
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/track">Track</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/track" element={<Track/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} SwiftDrop Delivery — Fast. Reliable. Right to Your Door.</div>
      </footer>
    </Router>
  );
}
