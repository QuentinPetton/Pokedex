import joi from "joi";
import { Pokemon, Team } from "../models/index.js";
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
} from "../errors/errors.js";

export async function getAllTeams(req, res) {
  const teams = await Team.findAll({
    include: [{
      model: Pokemon,
      as: 'pokemons'
    }],
    order: [["id", "ASC"]],
  });
  res.status(200).json(teams);
}


export async function getOneTeam(req,res){
  const teamId = parseInt(req.params.id);

  const team = await Team.findByPk(teamId, {
    include: [{
      model: Pokemon,
      as: 'pokemons'
    },]
  });
  res.status(200).json(team);

}
export async function createTeam(req, res) {
  // Input validation
  const createTeamSchema = buildCreateTeamSchema();
  const { error, value: teamDTO } = createTeamSchema.validate(req.body);
  if (error) {
    throw new BadRequestError(error.message);
  }

  // Database checks
  const alreadyExistingTeamWithSameName = await Team.findOne({
    where: { name: teamDTO.name },
  });
  if (alreadyExistingTeamWithSameName) {
    throw new ConflictError("Team name is already taken.");
  }

  // Creation
  const team = await Team.create(teamDTO);

  // Response
  res.status(201).json(team);
}

function buildCreateTeamSchema() {
  /**
   * DTO to create a new Team
   * @typedef {object} CreateTeamDTO
   * @property {string} name.required - The name of the team
   * @property {string} description - The description
   */
  return joi.object({
    name: joi.string().min(1).required(),
    description: joi.string().min(1),
  });
}

export async function updateTeam(req, res) {
  //On récupère son id
  const teamId = parseInt(req.params.id);
  //Ensuite on le compare à la bdd
  const team = await Team.findByPk(teamId);

  if (!team) {
    throw new NotFoundError(`Team with ID ${teamId} not found`);
  }

  // Input validation
  const updateTeamSchema = buildUpdateTeamSchema();
  const { error, value: teamDTO } = updateTeamSchema.validate(req.body);
  if (error) {
    throw new BadRequestError(error.message);
  }

  // Database checks

  //Vérifier si le nom à changé ou non (si changement uniquement de description, ne pas bloquer la maj)
  if (teamDTO.name !== team.name) {
    const alreadyExistingTeamWithSameName = await Team.findOne({
      where: { name: teamDTO.name },
    });
    if (alreadyExistingTeamWithSameName) {
      throw new ConflictError("Team name is already taken.");
    }
  }

  console.log(team.name);
  console.log(req.body.description);
  //todo Validation à prévoir: pas de doublon de nom de team. Pas de nom vide. Pour description, à voir
  //Si ok je fais l'update
  team.name = teamDTO.name || team.name; //On update le nouveau nom de team, si pas fourni, on reste sur nom actuel (ex je change que description)
  team.description = teamDTO.description || team.description;

  const updatedTeam = await team.update(teamDTO);

  res.status(200).json(updatedTeam);
}

function buildUpdateTeamSchema() {
  /**
   * DTO to create a new Team
   * @typedef {object} UpdateTeamDTO
   * @property {string} name- The name of the team
   * @property {string} description - The description
   */
  //Je rends mes champs optionnels car si pas saisie, je garde les anciennes données
  return joi.object({
    name: joi.string().trim().min(1),
    description: joi.string().min(1),
  });
}

export async function deleteTeam(req, res) {
  //On va récupérer id
  //La comparer à la bdd
  //On récupère son id
  const teamId = parseInt(req.params.id);
  const team = await Team.findByPk(teamId);

  if (!team) {
    throw new NotFoundError(`Team with ID ${teamId} not found`);
  }
  //Si ok on fait le delete
  await team.destroy();
  res.status(204).end();
}

export async function putPokemonInTeam(req, res) {
  //On veux l'id du pokemon
  //Puis l'id de la team
  console.log(req.params);
  const { teamId, pokemonId } = req.params;

  //On les compares à la bdd
  const team = await Team.findByPk(teamId);
  if (!team) {
    throw new NotFoundError(`Team with ID ${teamId} not found`);
  }

  const pokemon = await Pokemon.findByPk(pokemonId);
  if (!pokemon) {
    throw new NotFoundError(`Team with ID ${pokemonId} not found`);
  }

  //Si ok on ajoute le Pokémon dans la team
  await team.addPokemon(pokemon);

  res.status(200).json(team);
}

export async function removePokemonInTeam(req,res) {
  console.log(req.params);
  const { teamId, pokemonId } = req.params;

  //On les compares à la bdd
  const team = await Team.findByPk(teamId);
  if (!team) {
    throw new NotFoundError(`Team with ID ${teamId} not found`);
  }

  const pokemon = await Pokemon.findByPk(pokemonId);
  if (!pokemon) {
    throw new NotFoundError(`Team with ID ${pokemonId} not found`);
  }

  //Si ok on ajoute le Pokémon dans la team
  await team.removePokemon(pokemon);

  res.status(200).json(team);

}
