import {
  closeModal,
  showErrorModal,
  showModal,
} from "../../commons/modals/modals.js";
import * as api from "../../services/api.js";
import { displaySuccessToast } from "../../commons/toasts/toasts.js";

export async function initTeamsPage() {
  await fetchAndDisplayTeams();
  initAddTeamModal();
  initEditTeamModal();
  initDeleteTeamModal();
}

async function fetchAndDisplayTeams() {
  const { error, teams } = await api.getAllTeams();
  if (error) {
    return showErrorModal();
  }

  if (teams.length === 0) {
    document.getElementById("no-teams-message").classList.remove("hidden");
    return;
  }
  //On récupère le container uL
  const teamsContainerElement = document.querySelector("#teams-container");
  //Pour chaque team, on fais un li qu'on intégrera dans ce ul avec team.name
  const editTeamModal = document.getElementById("edit-team-modal");
  const editTeamForm = document.getElementById("edit-team-form");

  const deleteTeamModal = document.getElementById("delete-team-modal");
  const deleteTeamForm = document.getElementById("delete-team-form");

  teams.forEach((team) => {
    //Un élément li pour chaque Team
    const liTeamElement = document.createElement("li");

    //Un élément details pour chaque team (accordeon picotCss)
    const detailsElement = document.createElement("details");

    // Ajoute l'ID de l'équipe
    detailsElement.id = `team-${team.id}`;
    detailsElement.name = team.name;
    // <summary> avec le nom de l'équipe (ce qui va être cliquable)
    const summaryElement = document.createElement("summary");
    summaryElement.textContent = team.name;
    //On ajoute le rôle button pour PicotCss
    summaryElement.setAttribute("role", "button");

    //Ensuite on créer des éléments dans le détail de la team
    const descriptionTeamElement = document.createElement("p");
    descriptionTeamElement.textContent = `Description: ${team.description}`;

    //On ajout l'image miniature des pokemons:
    // console.log(team.pokemons[0]);
    for (let index = 0; index < team.pokemons.length; index++) {
      const element = team.pokemons[index];
      console.log(element);
      const imagePokemonElement = document.createElement("img");
      imagePokemonElement.src = `/img/pokemons/${element.id}.webp`;
      imagePokemonElement.alt = element.name;
      detailsElement.appendChild(imagePokemonElement);
    }

    //On ajoute un bouton de modif
    const editTeamButton = document.createElement("button");
    editTeamButton.textContent = "Modifier";
    editTeamButton.dataset.teamId = team.id;

    //On ajoute un bouton delete
    const deleteTeamButton = document.createElement("button");
    deleteTeamButton.textContent = "Supprimer";
    deleteTeamButton.dataset.teamId = team.id;

    editTeamButton.addEventListener("click", () => {
      // Avant d'ouvrir la modale, on ajoute à celle-ci l'ID de la team que l'utilisateur va modifier
      editTeamForm.dataset.teamId = team.id;
      showModal(editTeamModal);
    });

    deleteTeamButton.addEventListener("click", () => {
      // Avant d'ouvrir la modale, on ajoute à celle-ci l'ID de la team que l'utilisateur va modifier
      deleteTeamForm.dataset.teamId = team.id;
      showModal(deleteTeamModal);
    });

    // Ajoute tous les éléments dans l'élément <details>
    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(descriptionTeamElement);
    detailsElement.appendChild(editTeamButton);
    detailsElement.appendChild(deleteTeamButton);

    // Ajoute l'élément <details> dans l'élément <li>
    liTeamElement.appendChild(detailsElement);

    // liTeamElement.appendChild(editTeamButton);
    teamsContainerElement.appendChild(liTeamElement);
    teamsContainerElement.classList.remove("hidden");
  });
}

function initAddTeamModal() {
  const addTeamButton = document.getElementById("add-team-button");
  const addTeamModal = document.getElementById("add-team-modal");
  const addTeamForm = document.getElementById("add-team-form");

  addTeamButton.addEventListener("click", () => {
    showModal(addTeamModal);
  });

  addTeamForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(addTeamForm));
    const { error, createdTeam } = await api.createTeam(formData);
    if (error) {
      return showErrorModal();
    }

    //Permet d'appliquer l'id de la team à la Li
    const teamsContainerElement = document.querySelector("#teams-container");
    const liTeamElement = document.createElement("li");

    //Un élément details pour chaque team (accordeon picotCss)
    const detailsElement = document.createElement("details");
    // Ajoute l'ID de l'équipe
    detailsElement.id = `team-${createdTeam.id}`;
    detailsElement.name = createdTeam.name;

    const summaryElement = document.createElement("summary");
    summaryElement.textContent = createdTeam.name;
    summaryElement.setAttribute("role", "button");

    //Ensuite on créer des éléments dans le détail de la team
    const descriptionTeamElement = document.createElement("p");
    descriptionTeamElement.textContent = `Description: ${createdTeam.description}`;

    const editTeamButton = document.createElement("button");
    editTeamButton.textContent = "Modifier";
    editTeamButton.dataset.teamId = createdTeam.id;

    //On ajoute un bouton delete
    const deleteTeamButton = document.createElement("button");
    deleteTeamButton.textContent = "Supprimer";
    deleteTeamButton.dataset.teamId = createdTeam.id;

    editTeamButton.addEventListener("click", () => {
      showModal(addTeamModal);
    });

    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(descriptionTeamElement);
    detailsElement.appendChild(editTeamButton);
    detailsElement.appendChild(deleteTeamButton);

    // Ajoute l'élément <details> dans l'élément <li>
    liTeamElement.appendChild(detailsElement);

    // Ajoute cet élément <li> dans le conteneur <ul>
    teamsContainerElement.appendChild(liTeamElement);

    addTeamForm.reset();
    displaySuccessToast("Équipe créée avec succès !");
    closeModal(addTeamModal);
  });
}

function initEditTeamModal() {
  //todo récupérer les données du formulaire de la modale
  //todo identifier le bouton (et son liId) pour savoir de quel team on parle
  //todo si le nom est ok, le mettre à jour dans front sans avoir à refresh
  //todo puis toast de succès
  //todo puis fermeture modal
  const editTeamForm = document.getElementById("edit-team-form");
  const editTeamModal = document.getElementById("edit-team-modal");

  editTeamForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(editTeamForm).entries());
    //On veux l'id de l'équipe à modifier
    const teamId = editTeamForm.dataset.teamId;
    console.log(teamId);

    if (teamId) {
      const { error, updatedTeam } = await api.editTeam(teamId, formData);
      if (error) {
        return showErrorModal();
      }

      // Mettre à jour l'affichage du nom de l'équipe dans le detailsElement (picot)sans rechargement
      const detailsElement = document.getElementById(`team-${teamId}`);
      // const liTeamElement = document.getElementById(`team-${teamId}`);
      // liTeamElement.firstChild.textContent = updatedTeam.name;
      const summaryElement = detailsElement.querySelector("summary");
      summaryElement.textContent = updatedTeam.name;
      const descriptionTeamElement = detailsElement.querySelector("p");
      descriptionTeamElement.textContent = `Description: ${updatedTeam.description}`;

      displaySuccessToast("Équipe modifiée avec succès !");
      closeModal(editTeamModal);
    }
  });
}

function initDeleteTeamModal() {
  const deleteTeamForm = document.getElementById("delete-team-form");
  const deleteTeamModal = document.getElementById("delete-team-modal");

  deleteTeamForm.addEventListener("submit", async (event) => {
    event.preventDefault();

   
    //On veux l'id de l'équipe à modifier
    const teamId = deleteTeamForm.dataset.teamId;
    console.log(teamId);

    if (teamId) {
      const { error} = await api.deleteTeam(teamId);
      if (error) {
        return showErrorModal();
      }

      const detailsElement = document.getElementById(`team-${teamId}`);
      const liElement = detailsElement.closest("li");
      liElement.remove();

      displaySuccessToast("Équipe supprimée avec succès !");
      closeModal(deleteTeamModal);
    }
  });
}
