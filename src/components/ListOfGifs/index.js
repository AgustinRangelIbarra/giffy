import React from 'react'
import Gif from '../Gif'
import '../Gif/Gif.css'
import './styles.css'

function ListOfGifs({ gifs }) {

	return <div className="ListOfGifs">
		{
			gifs.map(({ id, title, url }) =>
			<Gif
				key={id}
				id={id} // A GIF, pasale todas las props o propiedades
				title={title} // que hay en singleGif
				url={url}
			/>
			)
		}
	</div>
}

export default ListOfGifs;