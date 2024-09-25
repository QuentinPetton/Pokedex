// Node Core dependencies
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Third party dependencies
import express from "express";
import cors from "cors";
import { config } from "dotenv";

// Local dependencies
import { router as apiRouter } from "./routers/router.js";
import { errorHandler } from "./errors/errorHandler.js";

// Load environment variables
const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../..", ".env") });

// Create Express App
const app = express();

// Serve dist folder in production mode
if (process.env.NODE_ENV === "prod") {
  app.use(express.static(resolve(__dirname, "../front/dist")));
}

// Configure Cross-origin Requests policy
app.use(cors({ origin: process.env.ALLOWED_DOMAINS }));

// Body parsers
app.use(express.json()); // Handle `application/json` bodies
app.use(express.urlencoded({ extended: true })); // Handle `applicaiton/x-www-urlencoded` bodies

// Configure API routes
app.use("/api", apiRouter); // ❗️ API routes are accessible under /api path prefix ❗️


// Handle sub-routing redirection in production mode
if (process.env.NODE_ENV === "prod") {
  app.use((req, res) => { res.redirect(`/?redirect=${req.url}`); });
}

// Configure 404 response
app.use((_, res) => { res.redirect("/api/docs"); });

// Configure global error handling
app.use(errorHandler);

// Démarrage du serveur HTTP
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
