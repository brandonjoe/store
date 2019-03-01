import React, { Component } from 'react';
import classes from './Landing.module.css';
import Navbar from './Navbar';
class Landing extends Component {
    render() {
        return (
            
            <div>
            <Navbar />
                <div className={classes.main}>
                    <div className={classes.content}>
                        <div className={classes.title}>
                            Welcome to Peaches and Cherries
                        </div>
                        <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui magnam unde dignissimos ex fugiat labore
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;