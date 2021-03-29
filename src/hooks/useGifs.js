import {useState, useEffect} from 'react'
import getGifs from '../services/getGifs'


export const useGifs = ( {keyword} = { kwyword: null}) => {
	const [loading, setLoading] = useState(false);
	const [gifs, setGifs] = useState([]);

	console.log(keyword)

	useEffect(() => {
		setLoading(true);

		const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Bojack';

		getGifs({ keyword : keywordToUse})
			.then((gifs) => {
				setGifs(gifs)
				setLoading(false)
			localStorage.setItem("lastKeyword", keyword);
		});
	}, [keyword]); // keyword es la dependencia del efecto

	return {loading, gifs}
}
