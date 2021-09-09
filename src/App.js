import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
