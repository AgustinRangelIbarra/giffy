import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import getGifs from "../services/getGifs";

function ListOfGifs( {params} ) {
	const {keyword} = params;
	const [Loading, setLoading] = useState(false)
 
	const [gifs, setGifs] = useState([]);
	
	useEffect(() => {
		setLoading(true)
		getGifs({ keyword })
			.then((gifs) => {
				setGifs(gifs)
				setLoading(false)
			}
		);
   }, [keyword]);						// keyword es la dependencia del efecto

	if (Loading) return <i>Cargando...</i>

	return gifs.map(({ id, title, url }) =>
		<Gif							
			key={id}
			id={id}						// A GIF, pasale todas las props o propiedades 
			title={title}				// que hay en singleGif
			url={url}
		/>
	);
}
	// gifs.forEach(singleGif => <img src={singleGif}/>) NO USAR FOREACH - NO SE DEVUELVE NADA

export default ListOfGifs;