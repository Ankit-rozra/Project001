import React from 'react';
import '../Css/Cards.css';
import data from '../data/data';
function Card() {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.name} className="card-image" />
          <div className="card-details">
            <p className="card-name">{item.name}</p>
            <p className="card-price">{item.price}</p>{' '}
            <button className="card-button">Add</button> {/* Add the button */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
