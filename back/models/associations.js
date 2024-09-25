import { Pokemon } from "./Pokemon.js";
import { Type } from "./Type.js";
import { Team } from "./Team.js";

export { Pokemon, Type, Team };

// Pokemon <--> Type
Pokemon.belongsToMany(Type, {
  as : "types",
  through:"pokemon_type",
  foreignKey: "pokemon_id"
});

Type.belongsToMany(Pokemon, {
  as: "pokemons",
  through:"pokemon_type",
  foreignKey:"type_id"
});

// Pokemon <--> Team
Pokemon.belongsToMany(Team, {
  as: "teams",
  through:"team_pokemon",
  foreignKey: "pokemon_id",
});

Team.belongsToMany(Pokemon, {
  as:"pokemons",
  through:"team_pokemon",
  foreignKey:"team_id"
});
