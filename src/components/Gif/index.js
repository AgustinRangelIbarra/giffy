import React from "react";
import './Gif.css';
import { Link } from "wouter";

function Gif({ title, id, url }) {
	return (
		<div>
			{/* <Link to={`#${id}`} className="Gif btn gif-container btn-dark"></Link> */}
			<Link to={`/gif/${id}`} className="Gif btn gif-container btn-dark gif-link">
				<h5 className="h5">{title}</h5>
				<img alt="Gif" src={url} />
			</Link>
		</div>
	);
}

export default Gif;