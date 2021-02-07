export class PokemonView {
    showPokemons(pokemons) {
        const container = document.getElementById("app");
        pokemons.forEach(pokemon => {
            let output = `
                <div class="card">
                    <span class="card--id">#${pokemon.id}</span>
                    <img class="card--image" src="${pokemon.image}" alt="${pokemon.name}" />
                    <h1 class="card--name">${pokemon.name}</h1>
                    <span class="card--details">${pokemon.type}</span>
                </div>
            `;
            console.log(`pokemon ${pokemon.id} was shown!`);
            container.innerHTML += output;
        });
    }
}
