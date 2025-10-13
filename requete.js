function fetchAnimeData(typeRecherche) {
    let BaseUrl = 'https://anime-db.p.rapidapi.com/anime';
    switch(typeRecherche) {
        case 'titre':
            BaseUrl += `?page=1&size=10&search=${document.getElementById('inputValue').value}`;
            break;
        case 'genre':
            BaseUrl += `?page=1&size=10&genres=${document.getElementById('inputValue').value}`;
                break;
        case 'type':
            BaseUrl += `?page=1&size=10&type=${document.getElementById('inputValue').value}`;
            break;
        case 'id':
            BaseUrl += `/by-id/${document.getElementById('inputValue').value}`;
            break;
        case 'notation':
            BaseUrl += `/by-ranking/${document.getElementById('inputValue').value.toLowerCase()}`;
            break;
        default:
            throw new Error('Invalid search type');
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a26406f42cmsh9bf2df33d395916p1a0ed6jsnae18570af90f',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    return fetch(BaseUrl, options)
        .then(response => response.json())
        .then(data => {
            console.log('Anime data fetched successfully:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching anime data:', error);
            throw error;
        });
}

function rechercherAnime(typeRecherche) {
    deleteCards();
    fetchAnimeData(typeRecherche)
        .then(data => {
            if (typeRecherche === 'id' || typeRecherche === 'notation') {
                createCard(data);
            } else if (data && data.data) {
                data.data.forEach(anime => {
                    createCard(anime);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
document.getElementById('animeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const typeRecherche = formData.get('typeRecherche');
    rechercherAnime(typeRecherche);
});

document.getElementById('parametre').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
    const formData = new FormData(document.getElementById('animeForm'));
    const typeRecherche = formData.get('typeRecherche');
    rechercherAnime(typeRecherche);
    }
});

document.getElementById('clearBtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('animeForm').reset();
    deleteCards();
});
//TODO: add error handling for fetch and display a message to the user