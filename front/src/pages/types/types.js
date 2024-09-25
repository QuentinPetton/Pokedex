import * as api from "../../services/api.js";
import { showErrorModal } from "../../commons/modals/modals.js";

export async function initTypesPage() {
  await fetchAndDisplayTypes();
  // ...
}


async function fetchAndDisplayTypes() {
  const { error, types } = await api.getAllTypes();
  if (error) { return showErrorModal(); }
  console.log(types);
  types.forEach(insertType);
}

function insertType(type) {
  const typeTemplate = document.getElementById("type-template");

  const typeClone = typeTemplate.content.cloneNode(true);  


  typeClone.querySelector('[slot="type-name"]').textContent = type.name;
  typeClone.querySelector('[slot="pokemon-link"]').href = `/types/${type.id}/pokemons`;
  typeClone.querySelector('[slot="type-icon"]').src = `/icons//${type.name}.svg`;
  
  const typeLiElement = typeClone.querySelector('li');
  typeLiElement.style.backgroundColor = type.color;

  const typesContainer = document.getElementById("types-container");
  typesContainer.appendChild(typeClone);
}
