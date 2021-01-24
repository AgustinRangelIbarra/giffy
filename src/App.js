import React from 'react'
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import {Link, Route} from 'wouter'
import ShowGifs from './components/ShowGifs';

function App() {

   return (
      <div className="App">
         <section className="App-content">
				<Link to="/">
					<h1>App</h1>
				</Link>

				<ShowGifs />

				<Route
					path="/gif/:keyword" 
					component={ListOfGifs}
				/>
				

				{/* <ListOfGifs keyword={'panda'}/> */}
				{/* <button onClick={() => setKeyword('mapache')} className="btn btn-dark">Cambiar Gifs</button> */}
         </section>
      </div>
   );
} 

export default App;
