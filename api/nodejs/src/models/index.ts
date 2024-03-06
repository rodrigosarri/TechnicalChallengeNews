import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";

import { Menu } from "./Menu";
import { ResourceLink } from "./ResourceLink";
import { SocialMedia } from "./SocialMedia";
import { NewsAuthor } from "./NewsAuthor";
import { NewsCategory } from "./NewsCategory";
import { News } from "./News";
import { NewsMetadata } from "./NewsMetadata";

import { config } from "dotenv";

const dialect = process.env.DB_DIALECT as Dialect || "mysql";

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "development") {
  config();
}

const sequelize = new Sequelize({
  dialect: dialect,
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASS as string,
  host: process.env.DB_HOST as string,
});

sequelize.addModels([Menu, NewsAuthor, NewsCategory, News, NewsMetadata, ResourceLink, SocialMedia]);

export async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
}

export { sequelize, Menu, NewsAuthor, NewsCategory, News, NewsMetadata, ResourceLink, SocialMedia };
