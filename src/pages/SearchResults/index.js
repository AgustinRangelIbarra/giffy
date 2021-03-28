import React, {useEffect, useState} from 'react'
// import Spinner from "../../components/Spinner";
import ListOfGifs from '../../components/ListOfGifs'
import getGifs from "../../services/getGifs"


function SearchResults ({ params }) {
	const { keyword } = params;
	
	const [loading, setLoading] = useState(false);
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		setLoading(true);
		getGifs({ keyword })
			.then((gifs) => {
				setGifs(gifs);
				setLoading(false);
			});
	}, [keyword]); // keyword es la dependencia del efecto

	if (loading) return <i>Loading your Gifs...</i>;

	return <>
		<ListOfGifs gifs={gifs} />
	</>
}

export default SearchResults;