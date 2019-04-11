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
                style={{width: '5rem', height: "5rem"}}
                className='img-fluid' 
                alt='product' />
            </div>
            <div className={classes.column}>
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className={classes.column}>
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            <div className={classes.column}>
                <span className="d-lg-none">size : </span>
            {size.map(item => {
                return(<Size size={item.label}/>)
            })}
            </div>
            <div className={classes.column}>
                <div className="d-flex justify-content-center">
                    <div>
                       
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