import { DataTypes } from "sequelize";
import { fakerPT_BR as faker } from "@faker-js/faker";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

/* eslint-disable import/no-unused-modules */
export const up = async () => {
  await queryInterface.createTable("news_author", {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }).finally(() => {
    queryInterface.bulkInsert("news_author", [
      {
        uuid: faker.string.uuid(),
        name: "Julio César",
        url: "julio-cesar",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        name: "Marco Antônio",
        url: "marco-antonio",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        name: "Marco Pollo",
        url: "marco-pollo",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        name: "Anne Frank",
        url: "anne-frank",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        name: "Rosa Luxemburgo",
        url: "rosa-luxemburgo",
        createdAt: faker.date.anytime()
      },
    ]);
  });
};

/* eslint-disable import/no-unused-modules */
export const down = async () => {
  await queryInterface.dropTable("news_author");
};