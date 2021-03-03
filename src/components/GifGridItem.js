import React from 'react'

export default function GifGridItem( {id, title , url} ) {
    
    // console.log(id, title, url)
    return (
        <div className="card animate__animated animate__backInDown"> {/* Animate.css https://animate.style/  (libreria animaciones css) */}
            {/* {img.title} */}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
