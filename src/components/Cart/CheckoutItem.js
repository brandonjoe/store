import React from 'react';
import classes from './CheckoutItem.module.css';
const CheckoutItem = (item) => {
    const {id, title, price, img, count} = item;
    const limitTitle = (name) => {
        const newTitle = [];
        if (name.length > 40){
            name.split(' ').reduce((acc, curr) => {
                if(acc + curr.length <= 40){
                    newTitle.push(curr)
                }
                return acc + curr.length;
            }, 0);
            return `${newTitle.join(' ')}...`;
        } else {
            return name;
        }
    
    } 
    const name = "Simple Pink Tourmaline Ring in 14k Gold - Stacking Ring, Small Pink Tourmaline Ring, Delicate Gold Ring, Petite Pink Tourmaline Ring"
    return (
        
            <div className={classes.container}>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src='img/product-3.jpg'
                        style={{width: '7rem', height: "7rem"}}
                        className='img-fluid' />
                    </div>
                    {limitTitle(name)}
                </div>
            </div>
        
    );
};

export default CheckoutItem;
