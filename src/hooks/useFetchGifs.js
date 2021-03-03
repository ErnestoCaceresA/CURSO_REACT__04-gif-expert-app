import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
   
    const [state, setState] = useState({
        data: [],
        loading: true //antes de hacer la carga de imagenes
    });

    useEffect( () => {
        
        getGifs( category ).then( imgs => { //retorna el getGifs un objeto con los datos del gif

            setState({
                data: imgs,
                loading: false //lo cambia a falso porque ya termino de cargar
            });

            
            
        } )

    }, [category])


    return state; {/*Retorna el objeto state */}

}