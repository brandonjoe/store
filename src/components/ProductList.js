import React, { Component } from 'react';
import Product from './Product'
import {ProductConsumer} from '../context'
import classes from './ProductList.module.css';
import Modal from './Modal2';




class ProductList extends Component {
    render() {
        return (
            
            <React.Fragment>
       
                <div className='py-5'>
                    <div className='container'>
                    <div className={classes.title}>Products</div>
                        <div className='row'>
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}
                                         />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            //<Product></Product>
            
        );
    }
}

export default ProductList;