import React from 'react';
import TopNav from './TopNav';
import '../Css/Product.css';
import Cards from '../Components/Cards';
function ProductScreen() {
  return (
    <div classname="imgDiv">
      <TopNav display="Products" />
      <Cards />
    </div>
  );
}

export default ProductScreen;
