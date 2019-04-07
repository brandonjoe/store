import React from 'react';
import classes from './CheckoutItem.module.css';

const CheckoutItem = (item) => {
    const {id, title, price, img, count} = item;
    return (
        <div>
            <div className={classes.container}>
            
            </div>
        </div>
    );
};

export default CheckoutItem;