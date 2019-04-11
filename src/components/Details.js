import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Select from 'react-select';
import classes from './Details.module.css';
import {ProductProvider} from '../context.js';
import Product from './Product';
import Modal2 from './Modal2';
import Navbar from './Navbar';

const options = [
    {value: 1, label: "US: 1"},
    {value: 1.25, label: "US: 1.25"},
    {value: 1.5, label: "US: 1.5"},
    {value: 1.75, label: "US: 1.75"},
    {value: 2, label: "US: 2"},
    {value: 2.25, label: "US: 2.25"},

]
class Details extends Component {
    state={
        selectedOption: []
    }
    componentDidUpdate() {
    }
    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption });
        
    }
    
    render() {

        const {selectedOption} = this.state;
        return (
            <div>
                <Navbar />
            <ProductConsumer>
                {(value) => {
                   const{id,company,img,img2,img3, info, price, title, inCart, count, size}=value.detailProduct;
                   const {incrementDetail, decrementDetail} = value;
                   return(
                       
                       <div className='container py-5'>
                            {/* title */}
                            <div className='row'>
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                <Carousel autoPlay={true} showStatus={false} dynamicHeight={true} infiniteLoop={true} showArrows={false}>
                                <img src={img} className='img-fluid' alt="product"/>
                                <img src={img2} className='img-fluid' alt="product"/>
                                <img src={img3} className='img-fluid' alt="product"/>
                                </Carousel>
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <div className={classes.select}>
                                <div className={classes.size}>Size</div>
                                    <Select isMulti={true} isSearchable={true} onClick={value.changeSize(id, selectedOption)} value={selectedOption} onChange={this.handleChange} options={options}>
                                    </Select>
                                </div><div className={classes.size}>Quantity</div>
                                    <div className={classes.quantity}>
                                        <span className="btn btn-black mx-1">{selectedOption.length}</span>
                                    </div>
                                    
                                    {/* <ButtonContainer onClick={value.changeSize(id, selectedOption)}>
                                        Click to confirm size
                                    </ButtonContainer> */}
                                   
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                    <span className='text-uppercase'>
                                        {company} 
                                    </span>
                                </h4>
                                <h4 className='text-blue'>
                                <strong>
                                    price : <span>$</span> {price}
                                    </strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about the product:
                                </p>
                                <p className="text-muted lead">
                                {info}
                                </p>
                                 {/* button */}
                                <div>
                                    <Link to='/productlist'>
                                    <ButtonContainer >
                                        back to products
                                    </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled={inCart ? true : false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                    >
                                        {inCart ? 'in Cart' : 'add to cart'}
                                    </ButtonContainer>

                                </div>
                                </div>
                            </div>
                       </div>           
                   )
                }}
                
            </ProductConsumer>
            <ProductConsumer>
                {(value => {
                    const {id , size} = value.detailProduct;
                    return(
                        <Modal2 id={id} size={size} />
                    )
                })
                }
            </ProductConsumer>
           </div>
        );
    }
}

export default Details;