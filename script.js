const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const pokemonContainer = document.getElementById('pokemon-container');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    // Replace this with actual data retrieval logic (e.g., fetching from an API)
    const pokemonData = {
        name: 'Pikachu',
        id: 25,
        type: 'Electric',
        imageUrl: 'https://images.app.goo.gl/NT4xsyp3ohGWmkxw7',
    };


    // Display the Pokémon data in the container
    const pokemonDetails = `
        <div class="pokemon-card">
            <img src="${pokemonData.imageUrl}" alt="${pokemonData.name}">
            <h2>${pokemonData.name}</h2>
            <p>ID: ${pokemonData.id}</p>
            <p>Type: ${pokemonData.type}</p>
        </div>
    `;
    pokemonContainer.innerHTML = pokemonDetails;
});











