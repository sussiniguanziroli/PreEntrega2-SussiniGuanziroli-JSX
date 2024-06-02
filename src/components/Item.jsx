import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {

    

    return (
        <div className='producto'>
            <img src={producto.image} alt={producto.image} />
            <h2>{producto.name}</h2>
            <h3>${producto.price}</h3>
            <p>{producto.description}</p>
            <strong>{producto.category.name}</strong>
            <Link to={`/item/${producto.id}`} className='nav-link item-button'>Ver más</Link>
        </div>
    )
}

