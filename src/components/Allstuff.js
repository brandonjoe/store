import React, { Component } from 'react';
import Landing from './Landing';
import About from './About';
import Features from './Features';
import Modal2 from './Modal2';
import Stats from './Stats';
import Testimonial from './Testimonial.js';
import Contact from './Contact.js';
import ProductList from './ProductList.js';


class Allstuff extends Component {
    render() {
        return (
            <div>
                         <Landing />
        <About />
        <Features />
            <ProductList />
        <Stats />
            <Testimonial />
                <Contact />
                <Modal2 />
            </div>
        );
    }
}

export default Allstuff;