import { showErrorModal } from "../../commons/modals/modals.js";
import * as api from "../../services/api.js";

import { displaySuccessToast } from "../../commons/toasts/toasts.js";

export async function initHomePage() {

  await fetchAndDisplayPokemons();
  // ...
}

async function fetchAndDisplayPokemons() {
  const { error, pokemons } = await api.getAllPokemons();
  if (error) {
    return showErrorModal();
  }

  pokemons.slice(0, 20).forEach(insertPokemon);
}

async function insertPokemon(pokemon) {
  const pokemonTemplate = document.getElementById("pokemon-template");
  const pokemonClone = pokemonTemplate.content.cloneNode(true);

  pokemonClone.querySelector('[slot="pokemon-id"]').textContent = pokemon.id;
  pokemonClone.querySelector('[slot="pokemon-name"]').textContent = pokemon.name;
  pokemonClone.querySelector('[slot="pokemon-link"]').href = `/pokemon/${pokemon.id}`;
 

  const imageUrl = `/img/pokemons/${pokemon.id}.webp`;
  const articleElement = pokemonClone.querySelector('.container-background-image');
  articleElement.style.backgroundImage = `url(${imageUrl})`;

  const removeTeamPokemonButton = pokemonClone.querySelector(
    '[slot="pokemon-removeTeam"]'
  );
  const addTeamPokemonButton = pokemonClone.querySelector(
    '[slot="pokemon-addTeam"]'
  );

  //On veux récupérer les teams pour notre bouton ajouter à une team
  const { error: teamsError, teams } = await api.getAllTeams();
  
  if (teamsError) {
    return showErrorModal();
  }

  let pokemonTeams = pokemon.teams;
  
  const dropdownElement = pokemonClone.querySelector(
    '[slot="dropdown-removeTeam"]'
  );
  //On cache le bouton removeTeam par défaut, il n'apparaît que si pokemon à une team
  dropdownElement.classList.add("remove-team-hidden");

  if (pokemonTeams && pokemonTeams.length > 0) {
    dropdownElement.classList.remove("remove-team-hidden");

    //Si j'ai un pokémon qui à une team, on affiche un bouton pour pouvoir lui retirer la team
    pokemonTeams.forEach((team) => {
      const teamElement = document.createElement("a");
      teamElement.href = "#";
      teamElement.textContent = team.name;

      //Pour retirer un pokémon d'une équipe
      teamElement.addEventListener("click", async (event) => {
        event.preventDefault();
        await api.removePokemonInTeam(team.id, pokemon.id);

        //Ensuite on vérifie si le pokémon à encore des teams (pour masque bouton ou non)
        pokemonTeams = pokemonTeams.filter(currentTeam => currentTeam.id !== team.id);

        if (pokemonTeams.length === 0) {
          dropdownElement.classList.add("remove-team-hidden");
        }
        teamElement.remove();

        displaySuccessToast("Pokémon retiré avec succès !");
      });

      removeTeamPokemonButton.appendChild(teamElement);
    });
  }
  teams.forEach((team) => {
    const addTeamElement = document.createElement("a");
    addTeamElement.href = "#";
    addTeamElement.textContent = team.name;

    //Pour ajouter un pokémon à une équipe
    addTeamElement.addEventListener("click", async (event) => {
      event.preventDefault();
     
      //On veux récupérer la team pour checker le nombre de pokémons qu'elle contient
      // const { error: teamError, updatedTeam } = await api.getOneTeam(team.id);
  
      // if (teamError || !updatedTeam) {
      //   return showErrorModal;
      // }

      //Vérifier si la team comporte déjà 6 pokémons
      
      // if (updatedTeam.pokemons.length > 6) {
      //   return showErrorModal("Cette équipe a déjà 6 Pokémon.");
      // }
      //Si on passe le test du nombre de pokémons, on l'ajoute
      await api.putPokemonInTeam(team.id, pokemon.id);

      pokemonTeams.push(team);
      
      // SI l'ajout s'est fait, je devrais avoir le bouton "retirer de la team" qui sera dispo
      if (pokemonTeams.length > 0) {
        dropdownElement.classList.remove("remove-team-hidden");
      }

      //Ensuite on créer le nouvel élément dans le bouton retirer team
      const newTeamElement = document.createElement("a");
      newTeamElement.href = "#";
      newTeamElement.textContent = team.name;
      
      removeTeamPokemonButton.appendChild(newTeamElement);
      displaySuccessToast("Pokémon ajouté avec succès !");
    });

    addTeamPokemonButton.appendChild(addTeamElement);
  });

  const pokemonsContainer = document.getElementById("pokemons-container");
  pokemonsContainer.appendChild(pokemonClone);
}
