import { Pokemon, Type, sequelize } from "../models/index.js";

console.log("🚧 Échantillonnage des types...");

const types = await Type.bulkCreate([
  { name: 'Acier', color: '#aaaabb' },
  { name: 'Combat', color: '#bb5544' },
  { name: 'Dragon', color: '#7766ee' },
  { name: 'Eau', color: '#3399ff' },
  { name: 'Électrik', color: '#ffbb33' },
  { name: 'Feu', color: '#ff4422' },
  { name: 'Glace', color: '#77ddff' },
  { name: 'Insecte', color: '#aabb22' },
  { name: 'Normal', color: '#bbaabb' },
  { name: 'Plante', color: '#77cc55' },
  { name: 'Poison', color: '#aa5599' },
  { name: 'Psy', color: '#ff5599' },
  { name: 'Roche', color: '#bbaa66' },
  { name: 'Sol', color: '#ddbb55' },
  { name: 'Spectre', color: '#6666bb' },
  { name: 'Ténèbres', color: '#665544' },
  { name: 'Vol', color: '#6699ff' }
]);

console.log("🚧 Échantillonnage des Pokémons...");

const pokemons = await Pokemon.bulkCreate([
  { id: 1, name: 'Bulbizarre', hp: 45, atk: 49, def: 49, atk_spe: 65, def_spe: 65, speed: 45 },
  { id: 2, name: 'Herbizarre', hp: 60, atk: 62, def: 63, atk_spe: 80, def_spe: 80, speed: 60 },
  { id: 3, name: 'Florizarre', hp: 80, atk: 82, def: 83, atk_spe: 100, def_spe: 100, speed: 80 },
  { id: 4, name: 'Salameche', hp: 39, atk: 52, def: 43, atk_spe: 60, def_spe: 50, speed: 65 },
  { id: 5, name: 'Reptincel', hp: 58, atk: 64, def: 58, atk_spe: 80, def_spe: 65, speed: 80 },
  { id: 6, name: 'Dracaufeu', hp: 78, atk: 84, def: 78, atk_spe: 109, def_spe: 85, speed: 100 },
  { id: 7, name: 'Carapuce', hp: 44, atk: 48, def: 65, atk_spe: 50, def_spe: 64, speed: 43 },
  { id: 8, name: 'Carabaffe', hp: 59, atk: 63, def: 80, atk_spe: 65, def_spe: 80, speed: 58 },
  { id: 9, name: 'Tortank', hp: 79, atk: 83, def: 100, atk_spe: 85, def_spe: 105, speed: 78 },
  { id: 10, name: 'Chenipan', hp: 45, atk: 30, def: 35, atk_spe: 20, def_spe: 20, speed: 45 },
  { id: 11, name: 'Chrysacier', hp: 50, atk: 20, def: 55, atk_spe: 25, def_spe: 25, speed: 30 },
  { id: 12, name: 'Papilusion', hp: 60, atk: 45, def: 50, atk_spe: 80, def_spe: 80, speed: 70 },
  { id: 13, name: 'Aspicot', hp: 40, atk: 35, def: 30, atk_spe: 20, def_spe: 20, speed: 50 },
  { id: 14, name: 'Coconfort', hp: 45, atk: 25, def: 50, atk_spe: 25, def_spe: 25, speed: 35 },
  { id: 15, name: 'Dardargnan', hp: 65, atk: 80, def: 40, atk_spe: 45, def_spe: 80, speed: 75 },
  { id: 16, name: 'Roucool', hp: 40, atk: 45, def: 40, atk_spe: 35, def_spe: 35, speed: 56 },
  { id: 17, name: 'Roucoups', hp: 63, atk: 60, def: 55, atk_spe: 50, def_spe: 50, speed: 71 },
  { id: 18, name: 'Roucarnage', hp: 83, atk: 80, def: 75, atk_spe: 70, def_spe: 70, speed: 91 },
  { id: 19, name: 'Rattata', hp: 30, atk: 56, def: 35, atk_spe: 25, def_spe: 35, speed: 72 },
  { id: 20, name: 'Rattatac', hp: 55, atk: 81, def: 60, atk_spe: 50, def_spe: 70, speed: 97 },
  { id: 21, name: 'Piafabec', hp: 40, atk: 60, def: 30, atk_spe: 31, def_spe: 31, speed: 70 },
  { id: 22, name: 'Rapasdepic', hp: 65, atk: 90, def: 65, atk_spe: 61, def_spe: 61, speed: 100 },
  { id: 23, name: 'Abo', hp: 35, atk: 60, def: 44, atk_spe: 40, def_spe: 54, speed: 55 },
  { id: 24, name: 'Arbok', hp: 60, atk: 85, def: 69, atk_spe: 65, def_spe: 79, speed: 80 },
  { id: 25, name: 'Pikachu', hp: 35, atk: 55, def: 30, atk_spe: 50, def_spe: 40, speed: 90 },
  { id: 26, name: 'Raichu', hp: 60, atk: 90, def: 55, atk_spe: 90, def_spe: 80, speed: 100 },
  { id: 27, name: 'Sabelette', hp: 50, atk: 75, def: 85, atk_spe: 20, def_spe: 30, speed: 40 },
  { id: 28, name: 'Sablaireau', hp: 75, atk: 100, def: 110, atk_spe: 45, def_spe: 55, speed: 65 },
  { id: 29, name: 'Nidoran F', hp: 55, atk: 47, def: 52, atk_spe: 40, def_spe: 40, speed: 41 },
  { id: 30, name: 'Nidorina', hp: 70, atk: 62, def: 67, atk_spe: 55, def_spe: 55, speed: 56 },
  { id: 31, name: 'Nidoqueen', hp: 90, atk: 82, def: 87, atk_spe: 75, def_spe: 85, speed: 76 },
  { id: 32, name: 'Nidoran M', hp: 46, atk: 57, def: 40, atk_spe: 40, def_spe: 40, speed: 50 },
  { id: 33, name: 'Nidorino', hp: 61, atk: 72, def: 57, atk_spe: 55, def_spe: 55, speed: 65 },
  { id: 34, name: 'Nidoking', hp: 81, atk: 92, def: 77, atk_spe: 85, def_spe: 75, speed: 85 },
  { id: 35, name: 'Melofee', hp: 70, atk: 45, def: 48, atk_spe: 60, def_spe: 65, speed: 35 },
  { id: 36, name: 'Melodelfe', hp: 95, atk: 70, def: 73, atk_spe: 85, def_spe: 90, speed: 60 },
  { id: 37, name: 'Goupix', hp: 38, atk: 41, def: 40, atk_spe: 50, def_spe: 65, speed: 65 },
  { id: 38, name: 'Feunard', hp: 73, atk: 76, def: 75, atk_spe: 81, def_spe: 100, speed: 100 },
  { id: 39, name: 'Rondoudou', hp: 115, atk: 45, def: 20, atk_spe: 45, def_spe: 25, speed: 20 },
  { id: 40, name: 'Grodoudou', hp: 140, atk: 70, def: 45, atk_spe: 75, def_spe: 50, speed: 45 },
  { id: 41, name: 'Nosferapti', hp: 40, atk: 45, def: 35, atk_spe: 30, def_spe: 40, speed: 55 },
  { id: 42, name: 'Nosferalto', hp: 75, atk: 80, def: 70, atk_spe: 65, def_spe: 75, speed: 90 },
  { id: 43, name: 'Mystherbe', hp: 45, atk: 50, def: 55, atk_spe: 75, def_spe: 65, speed: 30 },
  { id: 44, name: 'Ortide', hp: 60, atk: 65, def: 70, atk_spe: 85, def_spe: 75, speed: 40 },
  { id: 45, name: 'Rafflesia', hp: 75, atk: 80, def: 85, atk_spe: 100, def_spe: 90, speed: 50 },
  { id: 46, name: 'Paras', hp: 35, atk: 70, def: 55, atk_spe: 45, def_spe: 55, speed: 25 },
  { id: 47, name: 'Parasect', hp: 60, atk: 95, def: 80, atk_spe: 60, def_spe: 80, speed: 30 },
  { id: 48, name: 'Mimitoss', hp: 60, atk: 55, def: 50, atk_spe: 40, def_spe: 55, speed: 45 },
  { id: 49, name: 'Aeromite', hp: 70, atk: 65, def: 60, atk_spe: 90, def_spe: 75, speed: 90 },
  { id: 50, name: 'Taupiqueur', hp: 10, atk: 55, def: 25, atk_spe: 35, def_spe: 45, speed: 95 },
  { id: 51, name: 'Triopikeur', hp: 35, atk: 80, def: 50, atk_spe: 50, def_spe: 70, speed: 120 },
  { id: 52, name: 'Miaouss', hp: 40, atk: 45, def: 35, atk_spe: 40, def_spe: 40, speed: 90 },
  { id: 53, name: 'Persian', hp: 65, atk: 70, def: 60, atk_spe: 65, def_spe: 65, speed: 115 },
  { id: 54, name: 'Psykokwak', hp: 50, atk: 52, def: 48, atk_spe: 65, def_spe: 50, speed: 55 },
  { id: 55, name: 'Akwakwak', hp: 80, atk: 82, def: 78, atk_spe: 95, def_spe: 80, speed: 85 },
  { id: 56, name: 'Ferosinge', hp: 40, atk: 80, def: 35, atk_spe: 35, def_spe: 45, speed: 70 },
  { id: 57, name: 'Colossinge', hp: 65, atk: 105, def: 60, atk_spe: 60, def_spe: 70, speed: 95 },
  { id: 58, name: 'Caninos', hp: 55, atk: 70, def: 45, atk_spe: 70, def_spe: 50, speed: 60 },
  { id: 59, name: 'Arcanin', hp: 90, atk: 110, def: 80, atk_spe: 100, def_spe: 80, speed: 95 },
  { id: 60, name: 'Ptitard', hp: 40, atk: 50, def: 40, atk_spe: 40, def_spe: 40, speed: 90 },
  { id: 61, name: 'Tetarte', hp: 65, atk: 65, def: 65, atk_spe: 50, def_spe: 50, speed: 90 },
  { id: 62, name: 'Tartard', hp: 90, atk: 85, def: 95, atk_spe: 70, def_spe: 90, speed: 70 },
  { id: 63, name: 'Abra', hp: 25, atk: 20, def: 15, atk_spe: 105, def_spe: 55, speed: 90 },
  { id: 64, name: 'Kadabra', hp: 40, atk: 35, def: 30, atk_spe: 120, def_spe: 70, speed: 105 },
  { id: 65, name: 'Alakazam', hp: 55, atk: 50, def: 45, atk_spe: 135, def_spe: 85, speed: 120 },
  { id: 66, name: 'Machoc', hp: 70, atk: 80, def: 50, atk_spe: 35, def_spe: 35, speed: 35 },
  { id: 67, name: 'Machopeur', hp: 80, atk: 100, def: 70, atk_spe: 50, def_spe: 60, speed: 45 },
  { id: 68, name: 'Mackogneur', hp: 90, atk: 130, def: 80, atk_spe: 65, def_spe: 85, speed: 55 },
  { id: 69, name: 'Chetiflor', hp: 50, atk: 75, def: 35, atk_spe: 70, def_spe: 30, speed: 40 },
  { id: 70, name: 'Boustiflor', hp: 65, atk: 90, def: 50, atk_spe: 85, def_spe: 45, speed: 55 },
  { id: 71, name: 'Empiflor', hp: 80, atk: 105, def: 65, atk_spe: 100, def_spe: 60, speed: 70 },
  { id: 72, name: 'Tentacool', hp: 40, atk: 40, def: 35, atk_spe: 50, def_spe: 100, speed: 70 },
  { id: 73, name: 'Tentacruel', hp: 80, atk: 70, def: 65, atk_spe: 80, def_spe: 120, speed: 100 },
  { id: 74, name: 'Racaillou', hp: 40, atk: 80, def: 100, atk_spe: 30, def_spe: 30, speed: 20 },
  { id: 75, name: 'Gravalanch', hp: 55, atk: 95, def: 115, atk_spe: 45, def_spe: 45, speed: 35 },
  { id: 76, name: 'Grolem', hp: 80, atk: 110, def: 130, atk_spe: 55, def_spe: 65, speed: 45 },
  { id: 77, name: 'Ponyta', hp: 50, atk: 85, def: 55, atk_spe: 65, def_spe: 65, speed: 90 },
  { id: 78, name: 'Galopa', hp: 65, atk: 100, def: 70, atk_spe: 80, def_spe: 80, speed: 105 },
  { id: 79, name: 'Ramoloss', hp: 90, atk: 65, def: 65, atk_spe: 40, def_spe: 40, speed: 15 },
  { id: 80, name: 'Flagadoss', hp: 95, atk: 75, def: 110, atk_spe: 100, def_spe: 80, speed: 30 },
  { id: 81, name: 'Magneti', hp: 25, atk: 35, def: 70, atk_spe: 95, def_spe: 55, speed: 45 },
  { id: 82, name: 'Magneton', hp: 50, atk: 60, def: 95, atk_spe: 120, def_spe: 70, speed: 70 },
  { id: 83, name: 'Canarticho', hp: 52, atk: 65, def: 55, atk_spe: 58, def_spe: 62, speed: 60 },
  { id: 84, name: 'Doduo', hp: 35, atk: 85, def: 45, atk_spe: 35, def_spe: 35, speed: 75 },
  { id: 85, name: 'Dodrio', hp: 60, atk: 110, def: 70, atk_spe: 60, def_spe: 60, speed: 100 },
  { id: 86, name: 'Otaria', hp: 65, atk: 45, def: 55, atk_spe: 45, def_spe: 70, speed: 45 },
  { id: 87, name: 'Lamantine', hp: 90, atk: 70, def: 80, atk_spe: 70, def_spe: 95, speed: 70 },
  { id: 88, name: 'Tadmorv', hp: 80, atk: 80, def: 50, atk_spe: 40, def_spe: 50, speed: 25 },
  { id: 89, name: 'Grotadmorv', hp: 105, atk: 105, def: 75, atk_spe: 65, def_spe: 100, speed: 50 },
  { id: 90, name: 'Kokiyas', hp: 30, atk: 65, def: 100, atk_spe: 45, def_spe: 25, speed: 40 },
  { id: 91, name: 'Crustabri', hp: 50, atk: 95, def: 180, atk_spe: 85, def_spe: 45, speed: 70 },
  { id: 92, name: 'Fantominus', hp: 30, atk: 35, def: 30, atk_spe: 100, def_spe: 35, speed: 80 },
  { id: 93, name: 'Spectrum', hp: 45, atk: 50, def: 45, atk_spe: 115, def_spe: 55, speed: 95 },
  { id: 94, name: 'Ectoplasma', hp: 60, atk: 65, def: 60, atk_spe: 130, def_spe: 75, speed: 110 },
  { id: 95, name: 'Onix', hp: 35, atk: 45, def: 160, atk_spe: 30, def_spe: 45, speed: 70 },
  { id: 96, name: 'Soporifik', hp: 60, atk: 48, def: 45, atk_spe: 43, def_spe: 90, speed: 42 },
  { id: 97, name: 'Hypnomade', hp: 85, atk: 73, def: 70, atk_spe: 73, def_spe: 115, speed: 67 },
  { id: 98, name: 'Krabby', hp: 30, atk: 105, def: 90, atk_spe: 25, def_spe: 25, speed: 50 },
  { id: 99, name: 'Krabboss', hp: 55, atk: 130, def: 115, atk_spe: 50, def_spe: 50, speed: 75 },
  { id: 100, name: 'Voltorbe', hp: 40, atk: 30, def: 50, atk_spe: 55, def_spe: 55, speed: 100 },
  { id: 101, name: 'Electrode', hp: 60, atk: 50, def: 70, atk_spe: 80, def_spe: 80, speed: 140 },
  { id: 102, name: 'Noeunoeuf', hp: 60, atk: 40, def: 80, atk_spe: 60, def_spe: 45, speed: 40 },
  { id: 103, name: 'Noadkoko', hp: 95, atk: 95, def: 85, atk_spe: 125, def_spe: 65, speed: 55 },
  { id: 104, name: 'Osselait', hp: 50, atk: 50, def: 95, atk_spe: 40, def_spe: 50, speed: 35 },
  { id: 105, name: 'Ossatueur', hp: 60, atk: 80, def: 110, atk_spe: 50, def_spe: 80, speed: 45 },
  { id: 106, name: 'Kicklee', hp: 50, atk: 120, def: 53, atk_spe: 35, def_spe: 110, speed: 87 },
  { id: 107, name: 'Tygnon', hp: 50, atk: 105, def: 79, atk_spe: 35, def_spe: 110, speed: 76 },
  { id: 108, name: 'Excelangue', hp: 90, atk: 55, def: 75, atk_spe: 60, def_spe: 75, speed: 30 },
  { id: 109, name: 'Smogo', hp: 40, atk: 65, def: 95, atk_spe: 60, def_spe: 45, speed: 35 },
  { id: 110, name: 'Smogogo', hp: 65, atk: 90, def: 120, atk_spe: 85, def_spe: 70, speed: 60 },
  { id: 111, name: 'Rhinocorne', hp: 80, atk: 85, def: 95, atk_spe: 30, def_spe: 30, speed: 25 },
  { id: 112, name: 'Rhinoferos', hp: 105, atk: 130, def: 120, atk_spe: 45, def_spe: 45, speed: 40 },
  { id: 113, name: 'Leveinard', hp: 250, atk: 5, def: 5, atk_spe: 35, def_spe: 105, speed: 50 },
  { id: 114, name: 'Saquedeneu', hp: 65, atk: 55, def: 115, atk_spe: 100, def_spe: 40, speed: 60 },
  { id: 115, name: 'Kangourex', hp: 105, atk: 95, def: 80, atk_spe: 40, def_spe: 80, speed: 90 },
  { id: 116, name: 'Hypotrempe', hp: 30, atk: 40, def: 70, atk_spe: 70, def_spe: 25, speed: 60 },
  { id: 117, name: 'Hypocean', hp: 55, atk: 65, def: 95, atk_spe: 95, def_spe: 45, speed: 85 },
  { id: 118, name: 'Poissirene', hp: 45, atk: 67, def: 60, atk_spe: 35, def_spe: 50, speed: 63 },
  { id: 119, name: 'Poissoroy', hp: 80, atk: 92, def: 65, atk_spe: 65, def_spe: 80, speed: 68 },
  { id: 120, name: 'Stari', hp: 30, atk: 45, def: 55, atk_spe: 70, def_spe: 55, speed: 85 },
  { id: 121, name: 'Staross', hp: 60, atk: 75, def: 85, atk_spe: 100, def_spe: 85, speed: 115 },
  { id: 122, name: 'M.Mime', hp: 40, atk: 45, def: 65, atk_spe: 100, def_spe: 120, speed: 90 },
  { id: 123, name: 'Insecateur', hp: 70, atk: 110, def: 80, atk_spe: 55, def_spe: 80, speed: 105 },
  { id: 124, name: 'Lippoutou', hp: 65, atk: 50, def: 35, atk_spe: 115, def_spe: 95, speed: 95 },
  { id: 125, name: 'Elektek', hp: 65, atk: 83, def: 57, atk_spe: 95, def_spe: 85, speed: 105 },
  { id: 126, name: 'Magmar', hp: 65, atk: 95, def: 57, atk_spe: 100, def_spe: 85, speed: 93 },
  { id: 127, name: 'Scarabrute', hp: 65, atk: 125, def: 100, atk_spe: 55, def_spe: 70, speed: 85 },
  { id: 128, name: 'Tauros', hp: 75, atk: 100, def: 95, atk_spe: 40, def_spe: 70, speed: 110 },
  { id: 129, name: 'Magicarpe', hp: 20, atk: 10, def: 55, atk_spe: 15, def_spe: 20, speed: 80 },
  { id: 130, name: 'Leviator', hp: 95, atk: 125, def: 79, atk_spe: 60, def_spe: 100, speed: 81 },
  { id: 131, name: 'Lokhlass', hp: 130, atk: 85, def: 80, atk_spe: 85, def_spe: 95, speed: 60 },
  { id: 132, name: 'Metamorph', hp: 48, atk: 48, def: 48, atk_spe: 48, def_spe: 48, speed: 48 },
  { id: 133, name: 'Evoli', hp: 55, atk: 55, def: 50, atk_spe: 45, def_spe: 65, speed: 55 },
  { id: 134, name: 'Aquali', hp: 130, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 65 },
  { id: 135, name: 'Voltali', hp: 65, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 130 },
  { id: 136, name: 'Pyroli', hp: 65, atk: 130, def: 60, atk_spe: 95, def_spe: 110, speed: 65 },
  { id: 137, name: 'Porygon', hp: 65, atk: 60, def: 70, atk_spe: 85, def_spe: 75, speed: 40 },
  { id: 138, name: 'Amonita', hp: 35, atk: 40, def: 100, atk_spe: 90, def_spe: 55, speed: 35 },
  { id: 139, name: 'Amonistar', hp: 70, atk: 60, def: 125, atk_spe: 115, def_spe: 70, speed: 55 },
  { id: 140, name: 'Kabuto', hp: 30, atk: 80, def: 90, atk_spe: 55, def_spe: 45, speed: 55 },
  { id: 141, name: 'Kabutops', hp: 60, atk: 115, def: 105, atk_spe: 65, def_spe: 70, speed: 80 },
  { id: 142, name: 'Ptera', hp: 80, atk: 105, def: 65, atk_spe: 60, def_spe: 75, speed: 130 },
  { id: 143, name: 'Ronflex', hp: 160, atk: 110, def: 65, atk_spe: 65, def_spe: 110, speed: 30 },
  { id: 144, name: 'Artikodin', hp: 90, atk: 85, def: 100, atk_spe: 95, def_spe: 125, speed: 85 },
  { id: 145, name: 'Electhor', hp: 90, atk: 90, def: 85, atk_spe: 125, def_spe: 90, speed: 100 },
  { id: 146, name: 'Sulfura', hp: 90, atk: 100, def: 90, atk_spe: 125, def_spe: 85, speed: 90 },
  { id: 147, name: 'Minidraco', hp: 41, atk: 64, def: 45, atk_spe: 50, def_spe: 50, speed: 50 },
  { id: 148, name: 'Draco', hp: 61, atk: 84, def: 65, atk_spe: 70, def_spe: 70, speed: 70 },
  { id: 149, name: 'Dracolosse', hp: 91, atk: 134, def: 95, atk_spe: 100, def_spe: 100, speed: 80 },
  { id: 150, name: 'Mewtwo', hp: 106, atk: 110, def: 90, atk_spe: 154, def_spe: 90, speed: 130 },
  { id: 151, name: 'Mew', hp: 100, atk: 100, def: 100, atk_spe: 100, def_spe: 100, speed: 100 },
]);
await sequelize.query(`
  SELECT setval('${Pokemon.getTableName()}_id_seq', (SELECT MAX(id) from "${Pokemon.getTableName()}"))
`);


console.log("🚧 Ajout des types sur les Pokémons...");

await addPokemonType(1, 10);
await addPokemonType(1, 11);
await addPokemonType(2, 10);
await addPokemonType(2, 11);
await addPokemonType(3, 10);
await addPokemonType(3, 11);
await addPokemonType(4, 6);
await addPokemonType(5, 6);
await addPokemonType(6, 6);
await addPokemonType(6, 17);
await addPokemonType(7, 4);
await addPokemonType(8, 4);
await addPokemonType(9, 4);
await addPokemonType(10, 8);
await addPokemonType(11, 8);
await addPokemonType(12, 8);
await addPokemonType(12, 17);
await addPokemonType(13, 8);
await addPokemonType(13, 11);
await addPokemonType(14, 8);
await addPokemonType(14, 11);
await addPokemonType(15, 8);
await addPokemonType(15, 11);
await addPokemonType(16, 9);
await addPokemonType(16, 17);
await addPokemonType(17, 9);
await addPokemonType(17, 17);
await addPokemonType(18, 9);
await addPokemonType(18, 17);
await addPokemonType(19, 9);
await addPokemonType(20, 9);
await addPokemonType(21, 9);
await addPokemonType(21, 17);
await addPokemonType(22, 9);
await addPokemonType(22, 17);
await addPokemonType(23, 11);
await addPokemonType(24, 11);
await addPokemonType(25, 5);
await addPokemonType(26, 5);
await addPokemonType(27, 14);
await addPokemonType(28, 14);
await addPokemonType(29, 11);
await addPokemonType(30, 11);
await addPokemonType(31, 11);
await addPokemonType(31, 14);
await addPokemonType(32, 11);
await addPokemonType(33, 11);
await addPokemonType(34, 11);
await addPokemonType(34, 14);
await addPokemonType(35, 9);
await addPokemonType(36, 9);
await addPokemonType(37, 6);
await addPokemonType(38, 6);
await addPokemonType(39, 9);
await addPokemonType(40, 9);
await addPokemonType(41, 11);
await addPokemonType(41, 17);
await addPokemonType(42, 11);
await addPokemonType(42, 17);
await addPokemonType(43, 10);
await addPokemonType(43, 11);
await addPokemonType(44, 10);
await addPokemonType(44, 11);
await addPokemonType(45, 10);
await addPokemonType(45, 11);
await addPokemonType(46, 8);
await addPokemonType(46, 10);
await addPokemonType(47, 8);
await addPokemonType(47, 10);
await addPokemonType(48, 8);
await addPokemonType(48, 11);
await addPokemonType(49, 8);
await addPokemonType(49, 11);
await addPokemonType(50, 14);
await addPokemonType(51, 14);
await addPokemonType(52, 9);
await addPokemonType(53, 9);
await addPokemonType(54, 4);
await addPokemonType(55, 4);
await addPokemonType(56, 2);
await addPokemonType(57, 2);
await addPokemonType(58, 6);
await addPokemonType(59, 6);
await addPokemonType(60, 4);
await addPokemonType(61, 4);
await addPokemonType(62, 4);
await addPokemonType(62, 2);
await addPokemonType(63, 12);
await addPokemonType(64, 12);
await addPokemonType(65, 12);
await addPokemonType(66, 2);
await addPokemonType(67, 2);
await addPokemonType(68, 2);
await addPokemonType(69, 10);
await addPokemonType(69, 11);
await addPokemonType(70, 10);
await addPokemonType(70, 11);
await addPokemonType(71, 10);
await addPokemonType(71, 11);
await addPokemonType(72, 4);
await addPokemonType(72, 11);
await addPokemonType(73, 4);
await addPokemonType(73, 11);
await addPokemonType(74, 13);
await addPokemonType(74, 14);
await addPokemonType(75, 13);
await addPokemonType(75, 14);
await addPokemonType(76, 13);
await addPokemonType(76, 14);
await addPokemonType(77, 6);
await addPokemonType(78, 6);
await addPokemonType(79, 4);
await addPokemonType(79, 12);
await addPokemonType(80, 4);
await addPokemonType(80, 12);
await addPokemonType(81, 5);
await addPokemonType(81, 1);
await addPokemonType(82, 5);
await addPokemonType(82, 1);
await addPokemonType(83, 9);
await addPokemonType(83, 17);
await addPokemonType(84, 9);
await addPokemonType(84, 17);
await addPokemonType(85, 9);
await addPokemonType(85, 17);
await addPokemonType(86, 4);
await addPokemonType(87, 4);
await addPokemonType(87, 7);
await addPokemonType(88, 11);
await addPokemonType(89, 11);
await addPokemonType(90, 4);
await addPokemonType(91, 4);
await addPokemonType(91, 7);
await addPokemonType(92, 15);
await addPokemonType(92, 11);
await addPokemonType(93, 15);
await addPokemonType(93, 11);
await addPokemonType(94, 15);
await addPokemonType(94, 11);
await addPokemonType(95, 13);
await addPokemonType(95, 14);
await addPokemonType(96, 12);
await addPokemonType(97, 12);
await addPokemonType(98, 4);
await addPokemonType(99, 4);
await addPokemonType(100, 5);
await addPokemonType(101, 5);
await addPokemonType(102, 10);
await addPokemonType(102, 12);
await addPokemonType(103, 10);
await addPokemonType(103, 12);
await addPokemonType(104, 14);
await addPokemonType(105, 14);
await addPokemonType(106, 2);
await addPokemonType(107, 2);
await addPokemonType(108, 9);
await addPokemonType(109, 11);
await addPokemonType(110, 11);
await addPokemonType(111, 14);
await addPokemonType(111, 13);
await addPokemonType(112, 14);
await addPokemonType(112, 13);
await addPokemonType(113, 9);
await addPokemonType(114, 10);
await addPokemonType(115, 9);
await addPokemonType(116, 4);
await addPokemonType(117, 4);
await addPokemonType(118, 4);
await addPokemonType(119, 4);
await addPokemonType(120, 4);
await addPokemonType(121, 4);
await addPokemonType(121, 12);
await addPokemonType(122, 12);
await addPokemonType(123, 8);
await addPokemonType(123, 17);
await addPokemonType(124, 7);
await addPokemonType(124, 12);
await addPokemonType(125, 5);
await addPokemonType(126, 6);
await addPokemonType(127, 8);
await addPokemonType(128, 9);
await addPokemonType(129, 4);
await addPokemonType(130, 4);
await addPokemonType(130, 17);
await addPokemonType(131, 4);
await addPokemonType(131, 7);
await addPokemonType(132, 9);
await addPokemonType(133, 9);
await addPokemonType(134, 4);
await addPokemonType(135, 5);
await addPokemonType(136, 6);
await addPokemonType(137, 9);
await addPokemonType(138, 13);
await addPokemonType(138, 4);
await addPokemonType(139, 13);
await addPokemonType(139, 4);
await addPokemonType(140, 13);
await addPokemonType(140, 4);
await addPokemonType(141, 13);
await addPokemonType(141, 4);
await addPokemonType(142, 13);
await addPokemonType(142, 17);
await addPokemonType(143, 9);
await addPokemonType(144, 7);
await addPokemonType(144, 17);
await addPokemonType(145, 5);
await addPokemonType(145, 17);
await addPokemonType(146, 6);
await addPokemonType(146, 17);
await addPokemonType(147, 3);
await addPokemonType(148, 3);
await addPokemonType(149, 3);
await addPokemonType(149, 17);
await addPokemonType(150, 12);
await addPokemonType(151, 12);

console.log("✅ Migration terminée. Fermeture de la base...");
await sequelize.close();


async function addPokemonType(pokemonId, typeId) {
  await pokemons[pokemonId - 1].addType(types[typeId - 1]); // array indexes starts at 0 while pokemonId starts at 1
}
