import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

import { useGifs } from '../../hooks/useGifs'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs/index'

import "../../App.css";
import "../../components/Gif/Gif.css";
import "./styles.css";

const POPULAR_GIFS = ["CSGO", "AOT", "Cyberpunk", "God of War"];

//HOME
const Home = () => {
	const [keyword, setKeyword] = useState("");
	const [location, pushLocation] = useLocation();
	// console.log(location);
	const { loading, gifs } = useGifs();

	const handleSubmit = (event) => {
		// Navegar a otra Ruta
		event.preventDefault();
		pushLocation(`/search/${keyword}`);
		// console.log(keyword);
	};
	const handleChange = (event) => {
		setKeyword(event.target.value);
	};

	return (
		<div className="App-gifs">
			<form onSubmit={handleSubmit}>
				<input
					className="input"
					placeholder="Go find your Cool Gifs"
					onChange={handleChange}
					type="text"
					value={keyword}
				/>
				<button className="btn btn-outline-light btn-buscar">Let's Go</button>
			</form>
			{POPULAR_GIFS.map((popularGif) => (
				<li key={popularGif}>
					<Link className="Gif btn gif-btn btn-dark" to={`/search/${popularGif}`}>
						{popularGif}
					</Link>
				</li>
			))}
			<div className="popular-gifs">
				<h3>Last Gif Searched</h3>
				<ListOfGifs gifs={gifs} className="Gif"/>
			</div>
		</div>
	);
};;

export default Home;
