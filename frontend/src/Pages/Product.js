import React from 'react';
import TopNav from './TopNav';
import Card from '../Components/Card';
import '../Css/Product.css';
function ProductScreen() {
  return (
    <div classname="imgDiv">
      <TopNav display="Products" />

      <Card />
    </div>
  );
}

export default ProductScreen;
