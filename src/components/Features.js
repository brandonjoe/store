import React, { Component } from 'react';
import classes from './Features.module.css'
import ScrollAnimation from 'react-animate-on-scroll'

class Features extends Component {
    render() {
        return (
            <div>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <ScrollAnimation animateIn='fadeInLeft'>
                        <div className={` ${classes.card} ${classes.c1}`}>
                            
                            <i className={`fas fa-truck-moving fa-3x ${classes.icon}`} ></i>
                                    <div className={classes.header}>fast shipping</div>
                                    <div className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt assumenda est, laborum omnis magnam quia?</div>
                        
                                
                            </div>
                        </ScrollAnimation >
                        <ScrollAnimation animateIn="fadeIn">
                        <div className={`${classes.card} ${classes.c2}`}>
                            <i className={`fas fa-star fa-3x ${classes.icon}`} ></i>
                                    <div className={classes.header}>5-stars on Etsy</div>
                                    <div className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt assumenda est, laborum omnis magnam quia?</div>
                            </div>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animateIn="fadeInRight">
                        <div className={`${classes.card} ${classes.c3}`}>
                        <i className={`fade-left fas fa-tools fa-3x ${classes.icon}`} ></i>
                                <div className={classes.header}>100% Handmade</div>
                                <div className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt assumenda est, laborum omnis magnam quia?</div>
                        </div>
                        </ScrollAnimation>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;