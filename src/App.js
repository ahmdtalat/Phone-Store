import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/';
import NotFound from './components/NotFound';
import Modal from './components/Modal';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;
