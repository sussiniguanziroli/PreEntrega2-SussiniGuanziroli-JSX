import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from '../../data/categories.json';



export const NavBar = () => {
  return (
    <nav className='nav'>
            <ul className='nav-menu'>
                <li>
                    <NavLink to="/" activeclassname="active" className='nav-link' >Catalogo </NavLink>
                </li>
                {
                    categories.map((category) => {
                        return (
                            <li key={category.id}>
                            <NavLink to={`/category/${category.id}`} activeclassname="active" className='nav-link'>{category.name}</NavLink>
                            </li>
                        )  
                    })
                }
            </ul>
        </nav>
  )
}

