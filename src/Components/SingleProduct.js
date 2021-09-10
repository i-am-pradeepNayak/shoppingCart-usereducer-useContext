import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { cartContext } from '../Context/Context';
import Rating from './Rating';

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch
  } = useContext(cartContext);
  console.log(cart);

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {product.price.split('.')[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          {cart.some(ele => ele.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() => dispatch({ type: 'Remove', payload: product.id })}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              variant="success"
              disabled={!product.inStock}
              onClick={() => dispatch({ type: 'Add', payload: product })}
            >
              {!!product.inStock ? 'Add to cart' : 'out of stock'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
