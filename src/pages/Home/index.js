import React from 'react'
import { Link } from 'wouter'
import "../../App.css";
import "../../components/Gif/Gif.css"
import './styles.css'

const POPULAR_GIFS = ["CSGO", "AOT", "Cyberpunk", "God of War"];

//HOME
const Home = () => {
	return (
		<div className="App-gifs">
			{
				POPULAR_GIFS.map((popularGif) => (
					<li key={popularGif}>
						<Link className="Gif btn gif-btn btn-dark" to={`/search/${popularGif}`}>
							{popularGif}
						</Link>
					</li>
				))
			}
		</div>
	);
}

export default Home;