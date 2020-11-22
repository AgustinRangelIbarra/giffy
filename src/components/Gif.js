import React from "react";
import '../estilos/Gif.css'

export default function Gif( {title, id, url} ) {
  return (
	  <a 
	  href={`#${id}`} 
	  className='Gif btn btn-dark'>
			<h5 className="h5">{title}</h5>
			{/* <small className="h6">{id}: </small> */}
			<img src={url} />
		</a>
  );
}
