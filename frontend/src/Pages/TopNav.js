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
      <div className="Hnavbar-nav">
        {screen > 700 && (
          <span className="Hnav-item">
            <a className="Hnav-link">{props.display}</a>
          </span>
        )}

        <span className="Hnav-item-right ExampleComponent">
          {screen > 700 ? (
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
              <div className="title">{props.display}</div>
              <div className="hamburger-icon" onClick={toggleOptions}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              {!isCollapsed && (
                <div className="options">
                  <div>
                    <a href="/cart" className="iconButton">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="icons"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="/notification" className="iconButton">
                      <FontAwesomeIcon icon={faBell} className="icons" />
                    </a>
                  </div>
                  <div>
                    <a href="/profile" className="iconButton">
                      <FontAwesomeIcon icon={faUserCircle} className="icons" />
                    </a>
                  </div>{' '}
                </div>
              )}
            </div>
          )}
        </span>
      </div>
    </nav>
  );
};

export default HomeScreen;
