import React, { useState } from 'react';
import '../Css/TopNav.css';

import { FaBars } from 'react-icons/fa';

import { FaBell } from 'react-icons/fa';

import LiveDate from '../Components/LiveDate';

import { FaShoppingCart } from 'react-icons/fa';

const HomeScreen = (props) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const screenWidth = window.innerWidth;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleOptions = () => {
    setIsCollapsed(!isCollapsed);
  };
  window.addEventListener('resize', handleWindowResize);
  function handleWindowResize() {
    const screenWidth = window.innerWidth;
    changeScreen(screenWidth);
  }

  const [screen, changeScreen] = useState(screenWidth);
  const handleIconClick = () => {
    setIsDropdownVisible(isDropdownVisible);
  };
  return (
    <nav className="Hnavbar">
      <ul className="Hnavbar-nav">
        {screen > 600 && (
          <li className="Hnav-item">
            <a className="Hnav-link">{props.display}</a>
          </li>
        )}

        <li className="Hnav-item-right ExampleComponent">
          {screen > 700 ? (
            <span>
              <FaShoppingCart className="icons" />
              <FaBell className="icons" />
              <LiveDate />
            </span>
          ) : (
            <div>
              <div className="hamburger-icon" onClick={toggleOptions}>
                <FaBars />
              </div>
              {!isCollapsed && (
                <ul className="options">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default HomeScreen;
