import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../logo.svg";
import { ButtonContainer } from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5 justify-content-between">
                <Link to="/">
                    <img src={logo} alt="Store" className="nav-bar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Produk</Link>
                    </li>
                </ul>
                <Link to="/cart"className="ml-auto">
                    <ButtonContainer>
                        <span className="fa fa-cart-plus"></span>
                        &nbsp;My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link {
        color : var(--mainWhite) !important;
        font-size : 1.3rem;
        text-transform : uppercase;
    }
`