import React, { Component } from 'react';
import classes from './Stats.module.css';
import ScrollAnimation from 'react-animate-on-scroll'

class Stats extends Component {
    
    render() {
        return (
            <div>
                <div className={classes.main}>
                    <div className={classes.container}>
                    <ScrollAnimation animateIn='fadeIn'>
 <div className={classes.stat}>
                      
                            <div className={classes.number}>
                                400+
                            </div>
                            <div className={classes.description}>
                                sales
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'>
                        <div className={classes.stat}>
                            <div className={classes.number}>
                                2010
                            </div>
                            <div className={classes.description}>
                                trust seller
                            </div>
                        </div>
                    </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                        <div className={classes.stat}>
                            <div className={classes.number}>
                                100+
                            </div>
                            <div className={classes.description}>
                                reviews
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Stats;
