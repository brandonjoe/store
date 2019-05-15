import React, { Component } from 'react';
import classes from './ContactForm.module.css'
import Navbar from './Navbar.js';
import Contact from './Contact';
class ContactForm extends Component {
    render() {
        return (
         
            <div>
                <Navbar />
                <div className={classes.container}>
                    <div className={classes.title}>
                            Contact us
                        </div>
                    <div>
                    <div className={classes.main}>
                       
                        <div className={classes.left}>
                        <h1 className={classes.header}>Feel free to reach out!</h1>
                        <h2 className={classes.subheader}>I am always open to answering any questions you might have.</h2>
                        <div className={classes.margin}>
                        <i className={`fas fa-map-marker-alt fa-2x ${classes.icon}`} ></i>
                        <div className={classes.detail}><p>
                            <div className={classes.line}>Peaches and Cherries</div>
                            <div className={classes.line}>2101 Broad St </div>
                            <div className={classes.line}>PO Box 1001</div>
                            <div className={classes.line}>South Pasadena 91030</div>
                        </p>
                        </div>
                        </div>
                        
                        
                        <div className={`${classes.last} ${classes.margin}`} >
                        <i className={`fas fa-envelope fa-2x ${classes.icon1}`} ></i>
                            <div className={classes.lastline}>youremail@email.com</div>
                        </div>
                        <div className={classes.links}>
                            <a  href="https://www.etsy.com/shop/peachesandcherries" className={`fab fa-etsy fa-2x ${classes.link} ${classes.etsylink}`} ></a>
                            <a href="https://www.facebook.com/peachesandcherries/" className={`fab fa-facebook-square fa-2x ${classes.link} ${classes.facelink}`} ></a>

                        </div>
                        </div>
                       
                        <div className={classes.right}>
                                <form className={classes.form} method="POST" action="https://formspree.io/fludd555@yahoo.com">
                                    <div className={classes.first}>
                                        <label><input type="text" name="name" placeholder='Your Name' className={classes.name} /></label>
                            
                                        <label><input type="email" name="email" placeholder='Your Email' className={classes.name}/></label>
                                    </div>
                                <div className={classes.message}>
                                        <label><textarea name="message" className={classes.textarea} placeholder='Message...'></textarea></label>
                                </div>
                                    
                                    <button type="submit" className={classes.button}>Send Email</button>
                                </form>
                        </div>
                    </div>
                   
                       

                </div>
                  
                    
                </div>       
            </div>
       
            
        );
    }
}

export default ContactForm;