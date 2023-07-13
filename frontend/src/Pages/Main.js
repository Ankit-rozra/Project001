import React from 'react';
import '../Css/Main.css';
import VNavbar from './VNavbar';

import Page from './Page';
const Main = () => {
  return (
    <div className="dashboard-container">
      <VNavbar />
      <div className="con">
        <Page />
      </div>
    </div>
  );
};

export default Main;
