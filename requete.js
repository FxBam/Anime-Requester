function fetchAnimeData(typeRecherche, parametre) {
    let apiUrl = 'https://anime-db.p.rapidapi.com/anime';
    
    if (typeRecherche === 'id') {
        apiUrl += `/by-id/${encodeURIComponent(parametre)}`;
    } else if (typeRecherche === 'notation') {
                apiUrl += `/by-ranking/${parametre.toLowerCase()}`;
    } else {
        apiUrl += `?page=1&size=10`;

        switch(typeRecherche) {
            case 'titre':
                apiUrl += `&search=${encodeURIComponent(parametre)}`;
                break;
            case 'genre':
                apiUrl += `&genres=${encodeURIComponent(parametre)}`;
                    break;
            case 'type':
                apiUrl += `&type=${encodeURIComponent(parametre)}`;
                break;
        }
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a26406f42cmsh9bf2df33d395916p1a0ed6jsnae18570af90f',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    return fetch(apiUrl, options)
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

document.getElementById('animeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const typeRecherche = formData.get('typeRecherche');
    const parametre = formData.get('parametre');
    
    deleteCards();
    fetchAnimeData(typeRecherche, parametre)
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
});

document.getElementById('clearBtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('animeForm').reset();
    deleteCards();
});

document.getElementById('parametre').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
    const formData = new FormData(document.getElementById('animeForm'));
    const typeRecherche = formData.get('typeRecherche');
    const parametre = formData.get('parametre');
    
    deleteCards();
    fetchAnimeData(typeRecherche, parametre)
        .then(data => {
            if (typeRecherche === 'id') {
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
});