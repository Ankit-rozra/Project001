import React from 'react';
import TopNav from '../Pages/TopNav';
import '../Css/Dashboard.css';
import '../Css/Cards.css';
// import { Table, TableContainer } from 'react-bootstrap';
function RewardScreen() {
  const data = [
    { count: 500, prize: '1L Water Bottle' },
    { count: 2000, prize: '1 Dinner Set' },
    { count: 4500, prize: '15000/- Smartphone' },
    { count: 12000, prize: '30000/- A.C.' },
    { count: 25000, prize: '60000/- Splender Bike' },
    { count: 50000, prize: '120000/- Bullet' },
    { count: 100000, prize: '200000/-' },
    { count: 200000, prize: '250000/-' },
    { count: 400000, prize: '500000/- Santro' },
    { count: 900000, prize: '1000000/- MG Hector' },
  ];
  return (
    <div>
      <TopNav display="Rewards" />
      <div className="Dash">
        <div className="Earning">
          <div className="left">B.P.</div>
          <div className="sub">(1 B.P. = 10 B.v.)</div>
          <div className="left">0000</div>
        </div>
      </div>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-reward">B.P. = {item.count}</h5>
              {/* <p className="card-text">{item.count}</p> */}
              <h5 className="card-title">Prize</h5>
              <p className="card-text">{item.prize}</p>
              <button className="card-button">Redeem</button>{' '}
              {/* Add the button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardScreen;
