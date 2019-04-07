import React, { Component } from 'react';
import classes from './Contact.module.css';
import { Route} from  'react-router-dom';
class Contact extends Component {

    render() {
        return (
            <div>
                <div className={classes.main}>
                    <div className={classes.title}>Contact</div>
                    <div className={classes.message}>
                        Feel free to reach out and ask any questions!
                    </div>
                    <div className={classes.info}>
                  
                        <i className={`fas fa-map-marker-alt fa-2x ${classes.icon}`} ></i>
                        <div className={classes.detail}><p>
                            <div className={classes.line}>Peaches and Cherries</div>
                            <div className={classes.line}>2101 Broad St </div>
                            <div className={classes.line}>PO Box 1001</div>
                            <div className={classes.line}>South Pasadena 91030</div>
                        </p>
                        </div>
                    </div>
                    <div className={classes.botinfo}>
                  
                        <i className={`fas fa-envelope fa-2x ${classes.icon}`} ></i>
                        <div className={classes.detail}><p>
                            <div className={classes.lastline}>youremail@email.com</div>
                            
                        </p>
                    </div>
                  
                    </div>
                    <div className={classes.links}>
                        <a  href="https://www.etsy.com/shop/peachesandcherries" className={`fab fa-etsy fa-2x ${classes.link} ${classes.etsylink}`} ></a>
                        <a href="https://www.facebook.com/peachesandcherries/" className={`fab fa-facebook-square fa-2x ${classes.link} ${classes.facelink}`} ></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;