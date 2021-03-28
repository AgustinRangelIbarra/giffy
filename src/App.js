import React from "react";
import { Link, Route } from "wouter";

import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import "./App.css";
import Logo from './assets/logo.gif'


function App() {
	return (
		<div className="App">
			<section className="App-content">
				<Link to="/" className="title">
					{/* <h1 className="title-header btn">Cool Gifs</h1> */}
					<img className="title-img" src={Logo} alt="Logo" />
				</Link>
				
				<Route 
					component={Home} 
					path="/" 
				/>

				<Route 
					component={SearchResults} 
					path="/search/:keyword" 
				 />
				
				<Route 
					component={Detail} 
					path="/gif/:id" 
				/>
			</section>
		</div>
	);
}

export default App;
