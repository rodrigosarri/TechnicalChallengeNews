import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

import { waitForDatabase } from "./utils/wait-for-db";

import { initializeDatabase } from "./models";
import { umzug } from "./database";

import {
  MenuRoutes,
  NewsAuthorRoutes,
  NewsCategoryRoutes,
	NewMetadataRoutes,
	NewsRoutes,
  ResourceLinkRoutes,
  SocialMediaRoutes
} from "./routes";

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "development") {
  console.log("Você está em um ambiente de desenvolvimento");
  config();
}

async function main() {
	const app = express();
	const HOST = process.env.API_HOST as string;
	const PORT = process.env.API_PORT as string;

	app.use(json());
	app.use(cors());

	await waitForDatabase();
	await initializeDatabase();

	try {
		console.log("Starting migrations...");
		const executed = await umzug.up();
		console.log("Migrations were executed:", executed);

		const pending = await umzug.pending();
		console.log("Pending migrations:", pending);
	} catch (err) {
		console.error("Migration failed:", err);
		process.exit(1);
	}

	const swaggerUi = require("swagger-ui-express");
	const swaggerDocument = require("./swagger.json");

	app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	app.use("/api", MenuRoutes);
	app.use("/api", NewsAuthorRoutes);
	app.use("/api", NewsCategoryRoutes);
	app.use("/api", NewMetadataRoutes);
	app.use("/api", NewsRoutes);
	app.use("/api", ResourceLinkRoutes);
	app.use("/api", SocialMediaRoutes);

	app.listen(PORT, () => {
		console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`);
	});
}

main().catch(err => {
	console.error("Fatal error during startup:", err);
	process.exit(1);
});
