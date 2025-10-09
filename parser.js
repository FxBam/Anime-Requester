const url = 'https://anime-db.p.rapidapi.com/anime/by-id/1';
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
    card.classList.add('card', 'mb-4', 'shadow-sm');
    card.innerHTML = `
        <h2>${result.title}</h2>
        <img class="card-img-top img-centered-small" src="${result.image}" alt="image of ${result.title}">
        <p class="card-title"><strong>Synopsis:</strong> ${result.synopsis}</p>
        <p class="card-text"><strong>Genre:</strong> ${result.genres.join(', ')}</p>
        <p class="card-text"><strong>Rating:</strong> ${result.rating}</p>
        <p class="card-text"><strong>Episodes:</strong> ${result.episodes}</p>
    `;
    document.getElementById("Cards").appendChild(card);
}
function deleteCards(){
    let cards = document.getElementById("Cards");
    Array.from(cards.getElementsByClassName("card")).forEach(card => card.remove());
}

// Supprimez ces lignes à la fin du fichier
// async function main(){
//     await fetchData();
//     const json = JSON.parse(result);
//     try {
//     for (let i = 0; i < json.data.length; i++) {
//         createCard(json.data[i]);
//     }
//     } catch (error) {
//         createCard(json);
//     }
    
// }
// main();
