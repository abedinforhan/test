import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <div className="header container d-flex justify-content-between nt-5">
        <h2>Inter City Riders</h2>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/destination">Destination</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/">Contact</Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </nav>
      </div>
    );
};

export default Header;