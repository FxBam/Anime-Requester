function fetchAnimeData(typeRecherche, parametre) {
    let apiUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10';
    
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
        case 'notation':
            apiUrl += `&sortBy=ranking&sortOrder=${parametre.toLowerCase()}`;
            break;
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
    
    deleteCards(); // Nettoyer les cartes existantes
    fetchAnimeData(typeRecherche, parametre)
        .then(data => {
            if (data && data.data) {
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