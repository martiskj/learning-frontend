import { Pokemon } from '../models/Pokemon';

export class PokemonView {
    showPokemons(pokemons: Pokemon[]): void {
        
        const container: HTMLElement | any = document.getElementById("app");

        pokemons.forEach(pokemon => {
            let output: string = `
                <div class="card">
                    <span class="card--id">#${pokemon.id}</span>
                    <h1 class="card--name">${pokemon.name}</h1>
                    <img class="card--image" src="${pokemon.image}" alt="${pokemon.name}" />
                    <span class="card--details">${pokemon.type}</span>
                </div>
            `
        
            console.log(`pokemon ${pokemon.id} was shown!`);
            container.innerHTML += output;
        
        });
    }
}