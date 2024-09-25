import { NotFoundError } from "../errors/errors.js";
import { Pokemon, Team, Type } from "../models/index.js";

export async function getAllPokemons(req, res) {
  const pokemons = await Pokemon.findAll({
    include: [{
      model: Team,
      as: 'teams'
    }],
    order: [["id", "ASC"]],
  });
  res.status(200).json(pokemons);
}

export async function getOnePokemon(req, res) {
  // TODO: this route should also return the Pokémon's types so it can be displayed on the client
  const pokemonId = parseInt(req.params.id);

  const pokemon = await Pokemon.findByPk(pokemonId, {
    include: [
      {model: Type,
        as: 'types',},
    ]
  });
  if (!pokemon) { throw new NotFoundError(`Pokemon with ID ${pokemonId} not found`); }

  res.status(200).json(pokemon);
}
