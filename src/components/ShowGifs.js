import React from 'react'
import { Link } from 'wouter'
import "../App.css";
import "../estilos/Gif.css"

const ShowGifs = () => {
	const GifsArr = ["CSGO", "Videogames", "Cyberpunk", "God of War"];
	
	return (
		<div className="App">
			{
				GifsArr.map((gif, i) => {
					return <Link key={i} className="Gif btn btn-dark" to={`/gif/${gif}`}>{gif}</Link>
				})
			}
		</div>
	);
}

export default ShowGifs;