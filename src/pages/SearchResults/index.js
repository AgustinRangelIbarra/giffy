import React from 'react'
import { useGifs } from '../../hooks/useGifs'

import ListOfGifs from '../../components/ListOfGifs'


function SearchResults ({ params }) {
	const { keyword } = params;
	const { loading, gifs } = useGifs({ keyword });

	console.log('-')

	if (loading) return <i>Loading your cool Gifs...</i>;

	return <>
		<ListOfGifs gifs={gifs} />
	</>
}

export default SearchResults;