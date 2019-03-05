import React, { Component } from 'react';
import classes from './Features.module.css'
import heart from '../img/heart.svg'
import hammer from '../img/hammer.svg'
import cart from '../img/cart.svg'
class Features extends Component {
    render() {
        return (
            <div>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <div className={`${classes.card} ${classes.c1}`}>
                            <img src={heart} alt="heart" className={classes.icon}/>
                        </div>
                        <div className={`${classes.card} ${classes.c2}`}>
                        card2
                        </div>
                        <div className={`${classes.card} ${classes.c3}`}>
                        card2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;