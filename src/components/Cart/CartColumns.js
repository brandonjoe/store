import React from 'react';
import classes from './CartColumn.module.css';
const CartColumns = () => {
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className={classes.row}>
                <div className={classes.columns}>
                    <p className="text-uppercase">products</p>
                </div>
                <div className={classes.columns}>
                    <p className="text-uppercase">name of product</p>
                </div>
                <div className={classes.columns}>
                    <p className="text-uppercase">price</p>
                </div>
                <div className={classes.columns}>
                    <p className="text-uppercase">size</p>
                </div>
                <div className={classes.columns}>
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className={classes.columns}>
                    <p className="text-uppercase">remove</p>
                </div>
                <div className={classes.columns}>
                    <p className="text-uppercase">total</p>
                </div>
                
            </div>
        </div>
    )
}
export default CartColumns