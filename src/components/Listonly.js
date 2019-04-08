import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList.js';
import Modal2 from './Modal2.js';
class Listonly extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductList />
                <Modal2 />
            </div>
        );
    }
}

export default Listonly;