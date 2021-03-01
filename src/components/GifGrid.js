import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    const [images, setImages] = useState([])

    //NUEVO HOOK useEffect SIRVE PARA EJECUTAR CIERTO CODIGO DE MANERA CONDICIONAL
    //SI LLAMARAMOS EL getGifs() normal CADA QUE PRESIONE EL BOTON PARA CAMBIAR EL useState o ALGO PARECIDO REACT RENDERIZARA TODO EL COMPONENTE Y COMO EN ESTE COMPONENTE
    //TENEMOS ESTA FUNCION PARA LA PETICION, CADA QUE HAGAMOS UN CAMBIO VOLVERA A HACER ESTA PETICION HTTP de getGifs Y FORMARA BUCLES INFINITOS
    useEffect( () => {
        getGifs(category).then(imgs => setImages(imgs)) //como es una funcion async retorna una promesa
    }, [category]) //entre llaves si la categoria cambia volvera a ejecutar lo que esta dentro del hook

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map( img => {
                        return(
                            <GifGridItem 
                                key={img.id}              
                                {...img}
                            />
                        )
                    } )
                }
            
            </div>
        </>
    )
}
