import React, { useState } from 'react';
import '../Css/TopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import LiveDate from '../Components/LiveDate';
import { useSelector } from 'react-redux';

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

  const state = useSelector((state) => state.data);
  const num = state.length;
  return (
    <nav className="Hnavbar">
      <ul className="Hnavbar-nav">
        {screen > 820 && (
          <li className="Hnav-item">
            <a className="Hnav-link">{props.display}</a>
          </li>
        )}

        <li className="Hnav-item-right ExampleComponent">
          {screen > 690 ? (
            <span className="iconBox">
              <a href="/cart" className="iconButton">
                <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                {/* <span className="cart">
                  <sup>{num}</sup>
                </span> */}
              </a>
              <a href="/notification" className="iconButton">
                {' '}
                <FontAwesomeIcon icon={faBell} className="icons" />
              </a>
              <a href="/profile" className="iconButton">
                <FontAwesomeIcon icon={faUserCircle} className="icons" />
              </a>
              {/* <LiveDate /> */}
            </span>
          ) : (
            <div>
              <div className="hamburger-icon" onClick={toggleOptions}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              {!isCollapsed && (
                <ul className="options">
                  <li>
                    <a href="/cart" className="iconButton">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="icons"
                      />
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBell} className="icons" />
                  </li>{' '}
                  <li>
                    <FontAwesomeIcon icon={faUserCircle} className="icons" />
                  </li>{' '}
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
