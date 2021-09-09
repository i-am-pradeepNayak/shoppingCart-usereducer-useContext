import React, { useContext } from 'react';
import { cartContext } from '../Context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './styles.css';

const Home = () => {
  const {
    state: { products }
  } = useContext(cartContext);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map(product => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
