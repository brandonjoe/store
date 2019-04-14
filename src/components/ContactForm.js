import React, { Component } from 'react';
import classes from './ContactForm.module.css'
import Navbar from './Navbar.js';
class ContactForm extends Component {
    render() {
        return (
         
            <div>
                <Navbar />
                <div className={classes.container}>
                    <div className={classes.title}>
                        Contact us
                    </div>
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
       
            
        );
    }
}

export default ContactForm;