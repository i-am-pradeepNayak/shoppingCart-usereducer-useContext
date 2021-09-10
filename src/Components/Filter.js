import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { cartContext } from '../Context/Context';

import Rating from './Rating';

const Filters = () => {
  const { prodState, prodDispatch } = useContext(cartContext);
  const [rating, setrating] = useState();
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onClick={() =>
            prodDispatch({ type: 'sorting', payload: 'lowToHigh' })
          }
          checked={prodState.sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onClick={() =>
            prodDispatch({ type: 'sorting', payload: 'highToLow' })
          }
          checked={prodState.sort === 'highToLow' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={() => prodDispatch({ type: 'byStock' })}
          checked={prodState.byStock ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onClick={() => prodDispatch({ type: 'fast' })}
          checked={prodState.byFastDeliver ? true : false}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={rating}
          onClick={i => setrating(i + 1)}
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Button variant="light" onClick={() => prodDispatch({ type: 'clear' })}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
