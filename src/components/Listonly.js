import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList.js';
import Modal from './Modal.js';
class Listonly extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductList />
                <Modal />
            </div>
        );
    }
}

export default Listonly;