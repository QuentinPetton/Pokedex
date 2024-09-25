import { Pokemon, Type } from "../models/index.js";

export async function getAllTypes(_, res) {
  const types = await Type.findAll();
  res.status(200).json(types);
}

//todo méthode pour lister pokémons suivant son(ses?) types

export async function getOneType(req, res) {
  //On va récupérer le type dans id
  const typeId = parseInt(req.params.id);

  //Puis le comparer à notre BDD
  const type = await Type.findByPk(typeId);

  res.status(200).json(type);
}

export async function getPokemonByType(req, res) {
  //on récup-re le type Id
  const typeId = parseInt(req.params.id);
  //Ensuite on récupère dans la bdd les pokemons
  const pokemons = await Pokemon.findAll({
    include: { model: Type, as: "types", where: { id: typeId } },
  });
  res.status(200).json(pokemons);
}
