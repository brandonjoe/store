import React, { Component } from 'react';
import {Switch, Route} from  'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import Allstuff from './components/Allstuff';
import Listonly from './components/Listonly';
import Faq from './components/Faq';
import { StickyContainer, Sticky } from 'react-sticky';
import ContactForm from './components/ContactForm';
class App extends Component {
  render() {
    return (

      <React.Fragment>
        
        <Switch>
          <Route path="/" exact component={Allstuff}/>
          <Route path="/productList" component={Listonly} />
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={ContactForm} />
          <Route component={Default}/>
        </Switch>
       
        

        
       
      </React.Fragment>

    );
  }
}

export default App;
