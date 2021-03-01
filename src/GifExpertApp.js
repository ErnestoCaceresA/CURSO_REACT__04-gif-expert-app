import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Amor','Memes','Abrazo']);

    // const handleAdd = (e) => {
    //     setCategories( cats => [...categories, "Naturaleza"] ); //OPERADOR SPREAD para agregar un nuevo elemento al arreglo usando el useState,
    //     //en este caso la categoría nueva que agregamos se posicionaria al final de el arreglo si lo quisieramos al principio sería ["Naturaleza",...categories]
    //     //EL setCategories PUEDE TENER UN CALLBACK poniendo como primer argumento el ESTADO ANTERIOR (cats) y regresa el ESTADO NUEVO
    // }


    //COMUNICACION ENTRE COMPONENTES mandar la funcion del useState al otro componente AddCategory
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/> 
            <hr/>

            <ol>
                {
                    categories.map( e => {
                        return <li key={e}>  {e}  </li>
                    } )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;