const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a26406f42cmsh9bf2df33d395916p1a0ed6jsnae18570af90f',
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};
let result;
async function fetchData() {
    try {
        const response = await fetch(url, options);
        result = await response.text();
    } catch (error) {
        console.error(error);
    }
}

function createCard(result){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${result.title}</h2>
        <img src="${result.image}" alt="${result.title}">
        <p><strong>Synopsis:</strong> ${result.synopsis}</p>
        <p><strong>Genre:</strong> ${result.genres.join(', ')}</p>
        <p><strong>Rating:</strong> ${result.rating}</p>
        <p><strong>Episodes:</strong> ${result.episodes}</p>
    `;
    document.body.appendChild(card);
}
async function main(){
    await fetchData();
    const data = JSON.parse(result);
    for (let i = 0; i < data.data.length; i++) {
        createCard(data.data[i]);
    }
}
main();