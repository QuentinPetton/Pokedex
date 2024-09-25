import { initRouter } from "./src/router/router.js";

import { initHomePage } from "./src/pages/home/home.js";
import "./src/pages/home/home.scss";

import { initTypesPage } from "./src/pages/types/types.js";
import "./src/pages/types/types.scss";

import { initTypeDetailsPage } from "./src/pages/types/typeDetails.js";
import "./src/pages/types/typeDetails.scss";

import { initOnePokemonPage } from "./src/pages/pokemon/pokemon.js";
import "./src/pages/pokemon/pokemon.scss";

import { initTeamsPage } from "./src/pages/teams/teams.js";
import "./src/pages/teams/teams.scss";




initRouter([
  {
    path: "/",
    page: "home",
    handler: initHomePage
  },
  {
    path: "/types",
    page: "types",
    handler: initTypesPage
  },
  {
    path: "/types/:id/pokemons",
    page: "typeDetails",
    handler: initTypeDetailsPage
  },
  {
    path: "/pokemon/:id",
    page: "pokemon",
    handler: initOnePokemonPage
  },
  {
    path: "/teams",
    page: "teams",
    handler: initTeamsPage
  },
  {
    path: "/404",
    page: "notFound"
  }
]);
