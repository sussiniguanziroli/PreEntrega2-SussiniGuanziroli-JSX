import React from 'react';
import {NavBar} from './NavBar';
import { Carrito } from './Carrito';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <header className='header'>
            <Link to="/" ><img className="header-logo" src="../../src/assets/spirit-full-2.png" alt="" /></Link>
            <NavBar />
            <Carrito numerito={props.numerito} />
        </header>
    )
}
