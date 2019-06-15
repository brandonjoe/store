import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import classes from './Modal.module.css';
const options = [
    { value: 1, label: "US: 1" },
  { value: 1.25, label: "US: 1.25" },
  { value: 1.5, label: "US: 1.5" },
  { value: 1.75, label: "US: 1.75" },
  { value: 2, label: "US: 2" },
  { value: 2.25, label: "US: 2.25" }

]
class Modal extends Component {
    state={
        selectedOption: [], 
    }
    componentDidUpdate() {
        const val = this.context;
        console.log(val.modalOpen);
        console.log(this.state.selectedOption.length)
        let prevState = val.modalOpen;
        if(val.modalOpen === false && (this.state.selectedOption.length > 0)){
            this.setState({
                selectedOption: []
            })

        }
    }
    handler = (selectedOption) => {
        this.setState({ selectedOption });
        // console.log(`Option selected:`, selectedOption);

    }
    render() {
        const {selectedOption} = this.state;
        return (
            <ProductConsumer>
                {(value) => {
                    const{modalOpen,closeModal} = value;
                    const{id, img, title, price,count}=value.modalProduct
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return (<div className={classes.container}>
                            <div className="container">
                                <div className="row">
                                    <div id='modal' className={`col-8 mx-auto col-md-6 col-lg-5 text-center text-capitalize p-5 ${classes.modal}`}>
                                        <h5>item added to the cart</h5>
                                        <img src={img} className='img-fluid' alt='product'/>
                                        <h4>{title}</h4>
                                        <Select className={classes.select} isMulti={true} isSearchable={true} onClick={value.changeSize(id, selectedOption)} value={selectedOption} onChange={this.handler} options={options}>
                                    </Select>
                                    <p>Quantity</p>
                                    <div className={classes.quantity}><span className="btn btn-black mx-1">{selectedOption.length}</span></div>
                                        <h5 className='text-muted'>price : $ {price}</h5>
                                        <Link to='/productlist'>
                                            <ButtonContainer disabled={selectedOption.length > 0 ? false : true} onClick={() => closeModal()}>
                                                Continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart disabled={selectedOption.length > 0 ? false : true} onClick={() => closeModal()}>
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