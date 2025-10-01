const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a26406f42cmsh9bf2df33d395916p1a0ed6jsnae18570af90f',
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

function fetchAnimeData(query) {
      const apiUrl = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${encodeURIComponent(query)}&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'a26406f42cmsh9bf2df33d395916p1a0ed6jsnae18570af90f',
          'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
      };

      fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
          console.log('Anime data fetched successfully:', data);
        })
        .catch(error => {
          console.error('Error fetching anime data:', error);
        });
    }

document.getElementById('animeForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get('query');
    fetchAnimeData(query);
});