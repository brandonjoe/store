import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import classes from './Modal.module.css';
const options = [
    {value: 1, label: "US: 1"},
    {value: 1.25, label: "US: 1.25"},
    {value: 1.5, label: "US: 1.5"},
    {value: 1.75, label: "US: 1.75"},
    {value: 2, label: "US: 2"},
    {value: 2.25, label: "US: 2.25"},

]

class Modal extends Component {
    
    state={
        selectedOption: []   
    }
    
    componentDidUpdate() {
        let value = this.context;
        let newId  = this.props.id -1;
        let newSize = value.products[newId].size
        if (this.state != newSize){
            this.setState({
                selectedOption: newSize
            })
        }
 
    }
    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // console.log(`Option selected:`, selectedOption);
    }
    
    render() {
        const {selectedOption} = this.state;
        return (
            <ProductConsumer>
                {(value) => {
                    const{modalOpen,closeModal} = value;
                    const{id, img, title, price}=value.modalProduct
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return (<div className={classes.container}>
                            <div className="container">
                                <div className="row">
                                    <div id='modal' className={`col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5 ${classes.modal}`}>
                                        <h5>item added to the cart</h5>
                                        <img src={img} className='img-fluid' alt='product'/>
                                        <h4>{title}</h4>
                                        <Select className={classes.select} isMulti={true} isSearchable={true} onClick={value.changeSize(id, selectedOption)} value={selectedOption} onChange={this.handleChange} options={options}>
                                    </Select>
                                        <h5 className='text-muted'>price : $ {price}</h5>
                                        <Link to='/productlist'>
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}
Modal.contextType = ProductConsumer;

export default Modal;           