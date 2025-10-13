function createCard(result){
    const card = document.createElement('div');
    card.classList.add('card', 'mb-4', 'shadow-sm', 'p-3', 'bg-body', 'rounded');
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
