import React, { Component } from 'react';
import classes from './Faq.module.css'
import Navbar from './Navbar.js';
class Faq extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className={classes.container}>
                    <div className={classes.title}>
                    Frequently Asked Questions
                    </div>
                    <div className={classes.questioncontainer}>
                        <div className={classes.question}>
                            <div className={classes.header}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit?
                            </div>
                            <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam fugiat iusto in quidem corporis deserunt eum mollitia molestias atque laboriosam ad, inventore magnam earum debitis accusamus tenetur quo minima!
                            </div>
                        </div>
                        <div className={classes.question}>
                            <div className={classes.header}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit?
                            </div>
                            <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam fugiat iusto in quidem corporis deserunt eum mollitia molestias atque laboriosam ad, inventore magnam earum debitis accusamus tenetur quo minima!
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
           
        );
    }
}

export default Faq;