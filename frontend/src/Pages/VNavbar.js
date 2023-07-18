import React from 'react';
import '../Css/vNav.css';
import { useDispatch } from 'react-redux';
import { selectOption } from '../Redux/actions/action';

function VNavbar() {
  const dispatch = useDispatch();
  const handleOptionClick = (option) => {
    dispatch(selectOption(option));
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item top">
            <a href="#" className="nav-link-top">
              <b>Company Name</b>
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => handleOptionClick('Dashboard')}
          >
            <a href="/" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => handleOptionClick('Products')}
              href="/products"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/rewards"
              className="nav-link"
              onClick={() => handleOptionClick('Rewards')}
            >
              Rewards
            </a>
          </li>{' '}
          <li className="nav-item">
            <a
              href="/order"
              className="nav-link"
              onClick={() => handleOptionClick('Order')}
            >
              Your Orders
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/about"
              className="nav-link"
              onClick={() => handleOptionClick('About us')}
            >
              About us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/contact"
              className="nav-link"
              onClick={() => handleOptionClick('Contact us')}
            >
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/login"
              className="nav-link"
              onClick={() => handleOptionClick('Login')}
            >
              Login
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/register"
              className="nav-link"
              onClick={() => handleOptionClick('Register')}
            >
              Sign up
            </a>
          </li>
          <li className="main-content">
            <a
              href="/network"
              className="nav-link"
              onClick={() => handleOptionClick('Add member')}
            >
              My Network
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default VNavbar;
