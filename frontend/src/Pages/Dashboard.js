import React from 'react';
import TopNav from './TopNav';
import '../Css/Dashboard.css';
function Dashboard() {
  return (
    <div>
      <TopNav display="Dashboard" />
      <ul className="Dash">
        <li className="Earning">
          <div className="left">Pair Income</div>
          <div className="left">Rs. 0000</div>
        </li>
        <li className="Earning">
          <div className="left">Autopool Income</div>
          <div className="left">Rs. 0000</div>
        </li>
        <li className="Earning">
          <div className="left">Repurchase Income</div>
          <div className="left">Rs. 0000</div>
        </li>
        <li className="Earning">
          <div className="left">B.V.</div>
          <div className="left">Rs. 0000</div>
        </li>
        <li className="Earning">
          <div className="left">Total Income</div>
          <div className="left">Rs. 0000</div>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
