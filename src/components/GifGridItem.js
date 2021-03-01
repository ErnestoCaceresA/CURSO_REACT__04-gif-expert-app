import React from 'react'

export default function GifGridItem( {id, title , url} ) {
    
    // console.log(id, title, url)
    return (
        <div className="card">
            {/* {img.title} */}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
