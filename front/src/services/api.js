import httpRequester from "./httpRequester.js";
import { showErrorModal } from "../commons/modals/modals.js";

const apiBaseUrl = "http://localhost:3000/api";

//GESTION DES POKEMONS
export async function getAllPokemons() {
  try {
    const { error, json: pokemons } = await httpRequester.get(`${apiBaseUrl}/pokemons`);
    if (error) {
      showErrorModal(`Erreur lors de la récupération des Pokémons : ${error.message || "Erreur inconnue."}`);
    }
    return { error, pokemons };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

export async function getPokemon(pokemonId) {
  try {
    const { error, json: pokemon } = await httpRequester.get(`${apiBaseUrl}/pokemons/${pokemonId}`);
    if (error) {
      showErrorModal(`Erreur lors de la récupération du Pokémon : ${error.message || "Erreur inconnue."}`);
    }
    return { error, pokemon };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}


// GESTION DES TYPES
export async function getAllTypes() {
  try {
    const { error, json: types } = await httpRequester.get(`${apiBaseUrl}/types`);
    if (error) {
      showErrorModal(`Erreur lors de la récupération des types : ${error.message || "Erreur inconnue."}`);
    }
    return { error, types };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

export async function getPokemonsByType(typeId) {
  try {
    const { error, json: pokemons } = await httpRequester.get(`${apiBaseUrl}/types/${typeId}/pokemons`);
    if (error) {
      showErrorModal(`Erreur lors de la récupération des Pokémons par type : ${error.message || "Erreur inconnue."}`);
    }
    return { error, pokemons };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

//GESION DES TEAMS
export async function createTeam(teamDTO) {
  try {
    const { error, json: createdTeam } = await httpRequester.post(`${apiBaseUrl}/teams`, { body: teamDTO });
    if (error) {
      showErrorModal(`Erreur lors de la création de l'équipe : ${error.message || "Erreur inconnue."}`);
    }
    return { error, createdTeam };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}
export async function getAllTeams() {
  try {
    const { error, json: teams } = await httpRequester.get(`${apiBaseUrl}/teams`);
    if (error) {
      showErrorModal(`Erreur lors de la récupération des équipes : ${error.message || "Erreur inconnue."}`);
    }
    return { error, teams };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

export async function editTeam(teamId, updatedData) {
  try {
    const { error, json: updatedTeam } = await httpRequester.patch(`${apiBaseUrl}/teams/${teamId}`, { body: updatedData });
    if (error) {
      showErrorModal(`Erreur lors de la modification de l'équipe : ${error.message || "Erreur inconnue."}`);
    }
    return { error, updatedTeam };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

export async function deleteTeam(teamId) {
  try {
    const { error, json: deletedTeam } = await httpRequester.del(`${apiBaseUrl}/teams/${teamId}`);
    if (error) {
      showErrorModal(`Erreur lors de la suppression de l'équipe : ${error.message || "Erreur inconnue."}`);
    }
    return { error, deletedTeam };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

// AJOUTER UN POKEMON A UNE TEAM

export async function putPokemonInTeam(teamId, pokemonId) {
  try {
    const { error, json: updatedTeam } = await httpRequester.put(`${apiBaseUrl}/teams/${teamId}/pokemons/${pokemonId}`, { body: { teamId } });
    if (error) {
      showErrorModal(`Erreur lors de l'ajout du Pokémon à l'équipe : ${error.message || "Erreur inconnue."}`);
    }
    return { error, updatedTeam };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

export async function removePokemonInTeam(teamId, pokemonId) {
  try {
    const { error, json: updatedTeam } = await httpRequester.del(`${apiBaseUrl}/teams/${teamId}/pokemons/${pokemonId}`);
    if (error) {
      showErrorModal(`Erreur lors de la suppression du Pokémon de l'équipe : ${error.message || "Erreur inconnue."}`);
    }
    return { error, updatedTeam };
  } catch (err) {
    showErrorModal(`Erreur de connexion : ${err.message || "Veuillez réessayer plus tard."}`);
  }
}

