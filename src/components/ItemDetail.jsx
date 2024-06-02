import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ItemDetail = ({ product }) => {


    return (
        <div className='detail'>
            <div className='back-button nav-link'>
                <NavLink to={`/category/${product.category.id}`} ><ion-icon size="large" name="arrow-back-outline"></ion-icon></NavLink>
            </div>
            <section className='detail-section'>
                <img src={product.image} alt={product.image} />
                <h1>{product.name}</h1>
                <strong>${product.price}</strong>
                <p>{product.description}</p>
            </section>
        </div>
    )
}

export default ItemDetail