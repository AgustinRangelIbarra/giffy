import React from 'react'
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import {Link, Route} from 'wouter'
//1 import { useState } from "react";

function App() {
   // let keyword = '';
   // const state = useState([])
   // const useStateValue = state[0];
	// const useStateUpdateValue = state[1];
	
	//1 const [keyword, setKeyword] = useState('panda')

   return (
      <div className="App">
         <section className="App-content">
				<h1>App</h1>
				<Link className="Gif btn btn-dark" to="/gif/vagina">V</Link>
				<Link className="Gif btn btn-dark" to="/gif/xxx">X</Link>
				<Link className="Gif btn btn-dark" to="/gif/boobs">B</Link>
				<Route 
					path="/gif/:keyword" 
					component={ListOfGifs}
				/>
				
				{/* <ListOfGifs keyword={'panda'}/> */}
				{/*1 <button onClick={() => setKeyword('mapache')} className="btn btn-dark">Cambiar Gifs</button> */}
         </section>
      </div>
   );
} 

export default App;
