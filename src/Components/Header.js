import React, { useContext } from 'react';
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/Context';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    prodDispatch
  } = useContext(cartContext);

  //Cart Total
  const Total = cart.reduce((prev, cur) => prev + cur.price * cur.qty, 0);

  return (
    <div>
      <Navbar bg="dark" style={{ height: 80 }} variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
              onChange={e =>
                prodDispatch({ type: 'search', payload: e.target.value })
              }
            ></FormControl>
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              {cart.length > 0 ? (
                <Dropdown.Menu style={{ minWidth: 370 }}>
                  {cart.map(item => (
                    <>
                      <br />
                      <p>
                        <b>{`${item.name} , $${item.price} and quantity ${item.qty}`}</b>
                      </p>
                      <Button
                        onClick={() => dispatch({ type: 'qty', payload: item })}
                      >
                        +
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() =>
                          dispatch({ type: 'Remove', payload: item.id })
                        }
                      >
                        -
                      </Button>
                    </>
                  ))}
                  <br />
                  <br />

                  <h3> Total ${Total}</h3>
                </Dropdown.Menu>
              ) : (
                <Dropdown.Menu style={{ minWidth: 370 }}>
                  <span style={{ padding: 10 }}>Cart is empty</span>
                </Dropdown.Menu>
              )}
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
