import React, { Component } from 'react';
import classes from './Landing.module.css';
import Navbar from './Navbar';
class Landing extends Component {
    render() {
        return (
            
            <div>
           
                <div className={classes.main}>
                
                <div className={classes.content}>
                <Navbar />
                    <div className={classes.container}>
                        <div className={classes.title}>
                                    Welcome to Lorem Ipsum
                                </div>
                                <div className={classes.text}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui magnam unde dignissimos ex fugiat labore
                                </div>
                        </div>
                            
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Landing;