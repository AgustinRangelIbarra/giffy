const apiKey = 'iRtkW6iWrKlyRViyLldlrO5UxFlCWmDL'

function getGifs ({keyword = 'no'} = {}, {cant = '7'} = {}) {
	
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${cant}&offset=0&rating=r&lang=en`;
		
   return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
         const {data} = response;
         if( Array.isArray(data)) {
            const gifs = data.map(image => {
               const {images, title, id} = image;
               const {url} = image.images.downsized_medium;
                
               return {
                  title,
                  id,
                  url
               }
            })
            console.log(gifs)
            return gifs
         } else {
            <div>Bruh</div>
         }
		}
	)
}

export default getGifs;
