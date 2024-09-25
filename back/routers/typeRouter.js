import { Router } from "express";
import { controllerWrapper as cw } from "../errors/controllerWrapper.js";
import * as typeController from "../controllers/typeController.js";


export const router = Router();


/**
 * GET /types
 * @tags Type
 * @summary Returns all types
 * @return {Type[]} 200 - Success response
 */
router.get("/types", cw(typeController.getAllTypes));

router.get('/types/:id', cw(typeController.getOneType));

router.get('/types/:id/pokemons', cw(typeController.getPokemonByType));