document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById('gameContainer');

    fetch(`https://api.rawg.io/api/games?key=59008850ffb94f3b90df1ffa898b96c9`)
        .then(response => response.json())
        .then(data => {
            const games = data.results;
            
            if (Array.isArray(games)) {
                games.forEach(games => {
                    const gameCard = document.createElement('div');
                    gameCard.classList.add('game-card');
                    gameCard.innerHTML = `
                        <div class="game-image">
                            <img src="${games.background_image}" alt="${games.name}">
                        </div>
                        <h2 class="game-title">${games.name}</h2>
                    `;
                    gameContainer.appendChild(gameCard);
                });
            } else {
                console.error('No se encontró la lista de juegos');
                gameContainer.innerHTML = 'No se pudo cargar la lista de juegos.';
            }
        })
        .catch(error => {
            console.error('Error No Carga API correctamente', error);
            gameContainer.innerHTML = 'ERROR: No están disponibles los juegos.';
        });
});
