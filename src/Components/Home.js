import React, { useContext } from 'react';
import { cartContext } from '../Context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './styles.css';

const Home = () => {
  const {
    state: { products },
    prodState
  } = useContext(cartContext);

  //state
  console.log(prodState);

  const transformProd = () => {
    let sortedProd = products;

    if (prodState.searchQuery) {
      sortedProd = sortedProd.filter(item =>
        item.name.toLowerCase().includes(prodState.searchQuery.toLowerCase())
      );
    }

    if (!prodState.byStock) {
      sortedProd = sortedProd.filter(item => item.inStock);
    }

    if (prodState.sort) {
      sortedProd = sortedProd.sort((a, b) =>
        prodState.sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }

    if (prodState.byFastDeliver) {
      sortedProd = sortedProd.filter(item => item.fastDelivery);
    }
    return sortedProd;
  };

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProd().map(product => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
