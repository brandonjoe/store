import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  logo from '../cherry.png';
import styled from 'styled-components';
import classes from './Navbar.module.css';
import { StickyContainer, Sticky } from 'react-sticky';
class Navbar extends Component {

    render() {
        return (
            <NavWrapper className={classes.wrapper}>

                    <Link to='/'>
                    
                    <div className={classes.home}>
                    Home
                    </div>
                    </Link>  
                    <ul className=''>
                        <div className=''>
                            <Link to='/productlist' className={classes.products}>
                                Products
                            </Link>
                        </div>
                    </ul>
    
                  <Link to='/cart' className={` ${classes.fullcart}`}>
                       
                       <div className={`${classes.cart}`}>
                           <span className={``}>
                               <i className={`fas fa-cart-plus`} ></i>
                           </span>
                           <span className={classes.text}> Cart</span>
                       </div>
                   
                    </Link>

                  
                         
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
.nav-item{
    
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
    opacity: 1;
}
`
export default Navbar;
