import React, { useEffect, useState } from 'react'
import data from '../data/products.json'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [product, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])


  return (
    <div>{product ? 
        <ItemDetail product={product}/>
        : <p className='cargando'>Cargando</p>}</div>
  )
}

export default ItemDetailContainer