import * as api from "../../services/api.js";
import { router } from "../../router/router.js";

export async function initOnePokemonPage({ detail }) {
  const pokemonId = detail.data.id;
  //On affiche le pokemon initial
  await fetchAndDisplayPokemon(pokemonId);
  // On récupère la liste de tous les pokémons pour comparaison
  await selectPokemonsCompareOptions();

  
  // Ajouter un écouteur pour le bouton de comparaison
  document.getElementById("compare-button").addEventListener("click", async () => {
    const compareId = document.getElementById("compare-pokemon-select").value;
    if (compareId) {
      document.querySelector('[slot="compared-pokemon"]').classList.remove("hidden");
      await fetchAndDisplayPokemon2(compareId);
    }
  });

}

async function fetchAndDisplayPokemon(pokemonId) {
  const { error, pokemon } = await api.getPokemon(pokemonId);
  if (error) {
    return router.navigate("/404");
  }

  document.querySelector('[slot="pokemon-name"]').textContent = pokemon.name;
  document.querySelector('[slot="pokemon-img"]').src = `/img/pokemons/${pokemonId}.webp`;
  document.querySelector('[slot="pokemon-img"]').alt = pokemon.name;

  const pokemonTypeElement = document.querySelector('[slot="pokemon-type"]');
  //On fait un tableau récupérant le nom des types auquel on ajoute un espace entre chacuns
  const typesList = pokemon.types.map((type) => type.name).join(" ");
  console.log(typesList);

  pokemonTypeElement.textContent = `Types : ${typesList}`;

  // Mise à jour des statistiques
  updateStat("stat-hp", pokemon.hp, 250);
  updateStat("stat-atk", pokemon.atk, 154);
  updateStat("stat-def", pokemon.def, 180);
  updateStat("stat-atk-spe", pokemon.atk_spe, 135);
  updateStat("stat-def-spe", pokemon.def_spe, 130);
  updateStat("stat-speed", pokemon.speed, 160);
}
function updateStat(slot, value, max) {
  const barElement = document.querySelector(`[slot="${slot}"] .bar`);
  if (barElement) {
    const percentage = (value / max) * 100; // Calcul du pourcentage de la valeur
    barElement.style.width = `${percentage}%`;
    const valueElement = barElement.querySelector(".value");
    if (valueElement) {
      valueElement.textContent = value;
    }
  } else {
    console.warn(`Element with slot "${slot}" not found.`);
  }
}

async function selectPokemonsCompareOptions() {
  //On affiche tous les pokémons dans la liste
  //todo ne pas faire apparaitre le pokemon 1
  const { error, pokemons } = await api.getAllPokemons();
  if (error) {
    console.error("Erreur lors du chargement des Pokémon pour la comparaison :", error);
    return;
  }

  const selectElement = document.getElementById("compare-pokemon-select");
  pokemons.forEach(pokemon => {
    const option = document.createElement("option");
    option.value = pokemon.id;
    option.textContent = pokemon.name;
    selectElement.appendChild(option);
  });
}

async function fetchAndDisplayPokemon2(pokemonId) {
  const { error, pokemon } = await api.getPokemon(pokemonId);
  if (error) {
    return router.navigate("/404");
  }

  document.querySelector('[slot="pokemon2-name"]').textContent = pokemon.name;
  document.querySelector('[slot="pokemon2-img"]').src = `/img/pokemons/${pokemonId}.webp`;
  document.querySelector('[slot="pokemon2-img"]').alt = pokemon.name;

  const pokemonTypeElement = document.querySelector('[slot="pokemon-type2"]');
  //On fait un tableau récupérant le nom des types auquel on ajoute un espace entre chacuns
  const typesList = pokemon.types.map((type) => type.name).join(" ");
  console.log(typesList);

  pokemonTypeElement.textContent = `Types : ${typesList}`;

  // Mise à jour des statistiques
  updateStat("stat-hp2", pokemon.hp, 250);
  updateStat("stat-atk2", pokemon.atk, 154);
  updateStat("stat-def2", pokemon.def, 180);
  updateStat("stat-atk-spe2", pokemon.atk_spe, 135);
  updateStat("stat-def-spe2", pokemon.def_spe, 130);
  updateStat("stat-speed2", pokemon.speed, 160);
}
