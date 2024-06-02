import React, { useEffect, useState } from 'react'
import data from '../data/products.json'
import categories from '../data/categories.json'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);

    let [titulo, setTitulo] = useState("Productos");

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);

        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter((prod) => prod.category.id === categoryId))
                    setTitulo(categories.find((cat) => cat.id === categoryId).name);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }

            })


    }, [categoryId])

    // encierro cada nombre de productos en una etiqueta p,
    // de esta manera contruyo todo el html

    return (
        <main className='main-container'>
            <div className='item-list-container'>
                <h1>{titulo}</h1>
                <ItemList productos={productos} />

            </div>
        </main>

    )
}
