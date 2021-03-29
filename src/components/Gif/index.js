import React from "react";
import { Link } from "wouter";

import './Gif.css';

function Gif({ title, id, url }) {
	return (
		<div>
			{/* <Link to={`#${id}`} className="Gif btn gif-container btn-dark"></Link> */}
			<Link to={`/gif/${id}`} className="Gif btn gif-container btn-dark gif-link">
				<h5 className="h5">{title}</h5>
				<img loading='lazy' alt="Gif" src={url} />
			</Link>
		</div>
	);
}

export default Gif;