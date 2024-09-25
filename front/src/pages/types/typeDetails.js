import * as api from "../../services/api.js";
import { showErrorModal } from "../../commons/modals/modals.js";

//todo mettre en place methode qui récupère les pokemons par type
//récupérer les pokemons
export async function initTypeDetailsPage(detail) {
  //récupérer l'id du type
  console.log(detail.detail);
  const typeId = detail.detail.data.id;
  console.log(typeId);

  //Pour récupérer les pokemons du type en question
  await fetchAndDisplayPokemonsByTypes(typeId);
  // ...
 
}


async function fetchAndDisplayPokemonsByTypes(typeId) {
  const { error, pokemons } = await api.getPokemonsByType(typeId);
  if (error) {
    return showErrorModal();
  }

  console.log(pokemons);
  pokemons.forEach(insertPokemon);

}

function insertPokemon(pokemon) {
  const pokemonTemplate = document.getElementById("pokemon-template");
  const pokemonClone = pokemonTemplate.content.cloneNode(true);
 

  pokemonClone.querySelector('[slot="pokemon-id"]').textContent = pokemon.id;
  pokemonClone.querySelector('[slot="pokemon-name"]').textContent =
    pokemon.name;
  pokemonClone.querySelector(
    '[slot="pokemon-link"]'
  ).href = `/pokemon/${pokemon.id}`;
  pokemonClone.querySelector(
    '[slot="pokemon-img"]'
  ).src = `/img/pokemons/${pokemon.id}.webp`;
  pokemonClone.querySelector('[slot="pokemon-img"]').alt = pokemon.name;

  const pokemonsContainer = document.getElementById("pokemons-container");
  pokemonsContainer.appendChild(pokemonClone);
}
