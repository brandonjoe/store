import React from 'react';
import classes from './CartItem.module.css';
import Size from './Size';
const CartItem = ({item,value}) => {
    const{id, title, img, price, total, count,size} = item;
    const {increment, decrement, removeItem, showSizes} = value;
    return (
        <div className={classes.row}>
            <div className={classes.column}>
                <img 
                src={img} 
                
                className={classes.img} 
                alt='product' />
            </div>
            <div className={classes.column}>
                <span className="d-lg-none">Product : </span>
                {title}
            </div>
            <div className={classes.column}>
                <span className="d-lg-none">Price : </span>
                {price}
            </div>
            <div className={classes.column}>
                <span className="d-lg-none">Size : </span>
                {size.map(item => {
                return(<Size size={item.label}/>)
            })} 
            </div>
            <div className={classes.column}>
                <div className="d-flex justify-content-center">
                    <div>
                       <span className={classes.quantity}>Quantity:</span>
                        <span className="btn btn-black mx-1">{size.length}</span>
                       
                    </div>
                </div>
            </div>
            <div className={classes.column}>
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className={classes.column}>
                <strong>item total : $ {total * count}</strong>
            </div>
        </div>
    );
};

export default CartItem;