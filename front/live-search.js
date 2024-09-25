import { showErrorModal } from "./src/commons/modals/modals.js";
import * as api from "./src/services/api.js";

// import { displaySuccessToast } from "../front/src/commons/toasts/toasts.js";
document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll("#itemList li");

    listItems.forEach(function (item) {
      const itemText = item
        .querySelector('[slot="pokemon-name"]')
        .textContent.toLowerCase();

      if (itemText.includes(searchTerm)) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });
  });

//Ouverture container quand on clique sur input
document.getElementById("searchInput").addEventListener("click", () => {
  document.getElementById("search-container").style.display = "block";
});


document.addEventListener("click", (event) => {
  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("searchInput");
  
  if (!searchContainer.contains(event.target) && event.target !== searchInput) {
    searchContainer.style.display = "none";
  }
});


async function fetchAndDisplayPokemons() {
  const { error, pokemons } = await api.getAllPokemons();
  if (error) {
    return showErrorModal();
  }

  pokemons.forEach(insertPokemon);
}

async function insertPokemon(pokemon) {
  const searchTemplate = document.getElementById("search-template");
  const searchClone = searchTemplate.content.cloneNode(true);

  searchClone.querySelector('[slot="pokemon-name"]').textContent = pokemon.name;
  searchClone.querySelector('[slot="pokemon-link"]').href = `/pokemon/${pokemon.id}`;
  searchClone.querySelector('[slot="pokemon-id"]').textContent = pokemon.id;
  searchClone.querySelector('[slot="pokemon-img"]').src = `/img/pokemons/${pokemon.id}.webp`;
  searchClone.querySelector('[slot="pokemon-img"]').alt = pokemon.name;

  
  const searchContainer = document.getElementById("itemList");

  
  //todo On ajoute un event pour fermer container quand clic sur pokémon => Non fonctionnel
  
  searchContainer.appendChild(searchClone);
}

fetchAndDisplayPokemons();

//todo
//Faire une requete pour avoir listing pokemon (on limitera le nombre ou unj scroll)
//créer une "li" pour chaque pokemon
//Voir si filtre fonctionne
