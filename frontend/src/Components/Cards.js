import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Css/Cards.css';
function Cards() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  function handleAddToCart(id) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: id,
    });
  }
  return (
    <div className="container">
      {state.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.name} className="card-image" />
          <div className="card-details">
            <p className="card-name">{item.name}</p>
            <p className="card-price">{item.price}</p>{' '}
            <button
              className="card-button"
              onClick={() => handleAddToCart(item.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
