import React, { Component } from 'react';
import classes from './About.module.css'
import about1 from '../img/about1.jpg'
import about2 from '../img/about2.jpg'
import about3 from '../img/about3.jpg'
class About extends Component {
    render() {
        return (
            <div>
                <div className={classes.container}>
                <div className={classes.title}>
                    contemporary handmade jewelry
                </div>
                    <div className={classes.flex}>
                        <div className={classes.left}>
                            <div className={classes.header}>
                                Welcome to Lorem ipsum dolor 
                            </div>
                            <div className={classes.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iste modi! Iste voluptates deserunt nobis cupiditate? Itaque quaerat doloremque dolor unde soluta corrupti eveniet ipsa, aspernatur dicta aut, totam deleniti?
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.photos}>
                            <img src={about1} alt="image 1" className={`${classes.photo} ${classes.p1}`}/>
                                <img src={about2} alt="image 2" className={`${classes.photo} ${classes.p2}`}/>
                                <img src={about3} alt="image 3" className={`${classes.photo} ${classes.p3}`}/>
                            </div>
                                
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;