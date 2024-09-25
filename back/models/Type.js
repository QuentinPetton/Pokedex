import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Type extends Model {}

Type.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  color: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: "#ffffff"
  }
}, {
  sequelize,
  tableName: "type"
});


/**
 * A Type
 * @typedef  {object} Type
 * @property {string} id.required - Identifier
 * @property {string} name.required - Name
 * @property {string} color - Hexadecimal color (#ff00ff)
 */
