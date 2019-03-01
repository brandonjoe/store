import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  logo from '../cherry.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import classes from './Landing.module.css';
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

                    <Link to='/'>
                    <img src={logo} style={{width: "30px"}} alt="store" className='navbar-brand'/>
                    
                    </Link>  
                    <ul className='navbar-nav align-items-center'>
                        <li className='nav-item ml-5'>
                            <Link to='/' className={classes.nav-Link}>
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to='/cart' className='ml-auto'>
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus"></i>
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                         
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainWhite);
.nav-link{
    color:var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
}
`
export default Navbar;
