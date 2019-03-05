import React, { Component } from 'react';
import {Switch, Route} from  'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Landing from './components/Landing';
import About from './components/About';
import Features from './components/Features';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <About />
        <Features />
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
