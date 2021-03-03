import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    // const [images, setImages] = useState([])

    //NUEVO HOOK useEffect SIRVE PARA EJECUTAR CIERTO CODIGO DE MANERA CONDICIONAL
    //SI LLAMARAMOS EL getGifs() normal CADA QUE PRESIONE EL BOTON PARA CAMBIAR EL useState o ALGO PARECIDO REACT RENDERIZARA TODO EL COMPONENTE Y COMO EN ESTE COMPONENTE
    //TENEMOS ESTA FUNCION PARA LA PETICION, CADA QUE HAGAMOS UN CAMBIO VOLVERA A HACER ESTA PETICION HTTP de getGifs Y FORMARA BUCLES INFINITOS

    
    // useEffect( () => {
    //     getGifs(category).then(imgs => setImages(imgs)) //como es una funcion async retorna una promesa
    // }, [category]) //entre llaves si la categoria cambia volvera a ejecutar lo que esta dentro del hook

    // custom hook
    const {loading, data:images} = useFetchGifs(category); //data:images => le asigna el valor de la variaable desestructurada data a la variable images 

    return (
        <>
            <h3 className = 'card animate__animated animate__backInDown'>{category}</h3>

            {loading && <p>loading...</p>} {/*operador logico termario (if loading === true) */}

            <div className="card-grid card ">
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
