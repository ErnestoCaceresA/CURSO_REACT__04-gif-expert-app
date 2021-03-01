export const getGifs = async(category) => { //RETORNA UNA PROMESA
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YmxZOJdxhdwHhzVvZmJxYrhIhjuAiLW4`; //postman y documentacion search endopoint
    //encodeURI es una funcion de js para que si el usuario manda espacios cambiarlos por no se que para que se haga la peticion bien
    const respuesta = await fetch(url); //promesa
    const {data} = await respuesta.json(); //promesa obteniendo la informacion completa que solicitamos en la API

    const gifs = data.map (img => { //PARA RECOLECTAR SOLAMENTE LA INFORMACION QUE NECESITAMOS DE CADA GIF DE LA API
        //RETORNARA UN NUEVO OBJETO CON LAS SIGUIENTES TRES PROPIEDAD QUE SOLO NECESITAMOS
        return {
            id: img.id, //el id 
            title: img.title, //el titulo
            url: img.images?.downsized_medium.url //el url del video o del gif
        }
    })

    console.log(gifs); //imprimir los datos obtenidos en consola
    
    return gifs;
}