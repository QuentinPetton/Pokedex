import { Router } from "express";
import { controllerWrapper as cw } from "../errors/controllerWrapper.js";
import * as teamController from "../controllers/teamController.js";


export const router = Router();

/**
 * POST /teams
 * @tags Team
 * @param {CreateTeamDTO} request.body.required - the team body
 * @return {Team} 201 - the created team
 * @return {Error} 400 - Bad request response (ex: missing property)
 * @return {Error} 409 - Conflict response (ex: name already taken)
 */

// GESTION TEAMS
router.get("/teams", cw(teamController.getAllTeams));
router.get("/teams/:id", cw(teamController.getOneTeam));
router.post("/teams", cw(teamController.createTeam));
router.patch("/teams/:id", cw(teamController.updateTeam));
router.delete("/teams/:id", cw(teamController.deleteTeam));

// GESTION POKEMON DANS TEAMS
router.put("/teams/:teamId/pokemons/:pokemonId", cw(teamController.putPokemonInTeam));
router.delete("/teams/:teamId/pokemons/:pokemonId", cw(teamController.removePokemonInTeam));
