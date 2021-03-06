import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import classes from '../ProductList.module.css';
import Navbar from '../Navbar';

class Cart extends Component {
    componentDidMount(){
        const value = this.context;
        value.addTotals();
    }
    render() {
        return (
            
          
            <section>
                <Navbar />
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        console.log(cart);
                        if(cart.length > 0) {
                            return(
                                <React.Fragment>
                                    <div className={classes.title}>Cart</div>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history}/>
                                    
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}
Cart.contextType = ProductConsumer;
export default Cart;