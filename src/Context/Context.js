import { createContext, useReducer } from 'react';
import faker from 'faker';
import { prodreducer, reducer } from './Reducer';

export const cartContext = createContext();
faker.seed(99);

const Context = props => {
  const product = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5])
  }));

  //sort for item stock
  const products = product.sort((a, b) => b.inStock - a.inStock);

  //cartUseReducer
  var initialState = { products, cart: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  //filterUseReducer
  let prodInitialState = {
    byStock: false,
    byFastDeliver: false,
    byRating: 0,
    searchQuery: ''
  };

  const [prodState, prodDispatch] = useReducer(prodreducer, prodInitialState);

  return (
    <cartContext.Provider value={{ state, dispatch, prodState, prodDispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default Context;
