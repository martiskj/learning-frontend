import { Pokemon } from './models/Pokemon.js'
import * as pokemonView from './views/pokemonView.js'

async function getPokemons(): Promise<Pokemon[]> {
    
    let pokemons: Pokemon[] = [];

    for (let i = 1; i <= 3; i++) {
        const data:Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon: any = await data.json();

        pokemons.push({
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.front_default}`,
            type: pokemon.types.map((poke: any) => poke.type.name).join(", ")
        });

    }

    return pokemons;

    // return [
    //     {
    //         id: 1,
    //         name: 'bulbasaur',
    //         image: 'some image',
    //         type: 'grass, poison'
    //     },
    //     {
    //         id: 2,
    //         name: 'venusaur',
    //         image: 'some image 2',
    //         type: 'grass, poison'
    //     },
    //     {
    //         id: 3,
    //         name: 'charmander',
    //         image: 'some image',
    //         type: 'fire'
    //     }
    // ]
}

async function main(): Promise<void> {
    let pokemons = await getPokemons();
    
    var presentator = new pokemonView.PokemonView();
    presentator.showPokemons(pokemons);
}

main();
