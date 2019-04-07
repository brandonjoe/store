import React, { Component } from 'react';
import classes from './Success.module.css';
import {ProductConsumer} from '../../context';
import CheckoutItem from './CheckoutItem';
import axios from '../../axios-orders';
class Success extends Component {
    dateAndTime = () => {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return (
            date + " " + time
        )
    }
    componentDidMount() {
        console.log(this.props.carty);
        console.log(this.dateAndTime())
        const timeOrdered = this.dateAndTime();
        const order = {
            cart: this.props.carty,
            date: timeOrdered,
            TotalPrice: this.props.total
            
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    
    
    render() {
        
        return (
            

                <div className={classes.container}>
                <div className={classes.modal}>
                    <div className={classes.success}>
                            Payment was successful! 
                    </div>
                    <p className={classes.text}> Thank you {this.props.name}! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    {this.props.address}
                    <ProductConsumer>
                        {value => {
                            const {cart} = value;
                            if(cart.length > 0) {
                               cart.map(item => {
                                   return <CheckoutItem key={item.id} item={item}/>
                               })
                            }
                        }}
                    </ProductConsumer>
                    {this.props.total}
                    
                    
                </div>
            </div>
            
            

     
            
            
           
            
        );
    }
}

export default Success;