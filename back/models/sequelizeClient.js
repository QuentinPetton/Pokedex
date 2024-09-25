import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import { Sequelize } from "sequelize";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../..", ".env") });


export const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: "postgres",
  define: {
    timestamps: false
  },
  logging: process.env.NODE_ENV === "debug" ? console.log : false
});
