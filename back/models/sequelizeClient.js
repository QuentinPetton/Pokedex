import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import { Sequelize } from "sequelize";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Charger dotenv uniquement en développement local
if (process.env.NODE_ENV === "dev") {
  config({ path: resolve(__dirname, "../..", ".env") });
}

const databaseUrl = process.env.PG_URL;

if (!databaseUrl) {
  throw new Error('Database URL is not defined. Check your environment variables.');
}





export const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: "postgres",
  define: {
    timestamps: false
  },
  logging: process.env.NODE_ENV === "debug" ? console.log : false
});
