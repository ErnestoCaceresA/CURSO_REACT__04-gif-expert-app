//rafc snap para crear un nuevo componente
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => { //para que funcione el onChange y se puede modificar el texto del input
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }
    //entonces el inputValue siempre contendrá el ultimo valor que puso el usuario
    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que el form por defecto haga que refresque la pagina PROVAR DAR ENTER A UN FORM SIN ESTO Y VERAS COMO SE REFRESCA LA PAGINA POR COMPLETO
        
        if(inputValue.trim().length > 0){
            setCategories( cats => [...cats,inputValue] ); //como no tenemos acceso a la variable de ese useSatate que es el categories usamos el callback cats => y esa es la variable categories cuando no tenemos acceso a ella
            //setCategories se la pasamos como props desde el componente padre hasta este componente hijo
            setInputValue('');
        } else{

        }
    }

    //SIN EL ONCHANGE NO SIRVE
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
            
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
