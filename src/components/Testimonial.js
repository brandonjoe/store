import React, { Component } from 'react';
import classes from './Testimonial.module.css';

class Testimonial extends Component {
    render() {
        return (
            <div>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <div className={classes.box}>
                        <i className={`fas fa-quote-right fa-2x ${classes.icon}`} ></i>
                            <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </div>
                            <div className={classes.author}>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                             - Richard Roe
                            </div>
                        </div>
                        <div className={classes.box}>
                        <i className={`fas fa-quote-right fa-2x ${classes.icon}`} ></i>
                            <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </div>
                            <div className={classes.author}>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                             - Jane Doe
                            </div>
                        </div>
                        <div className={classes.box}>
                        <i className={`fas fa-quote-right fa-2x ${classes.icon}`} ></i>
                            <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </div>
                            <div className={classes.author}>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                            <i className={`fas fa-star  ${classes.star}`} ></i>
                             - John Smith
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;