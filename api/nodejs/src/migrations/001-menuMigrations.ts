import { DataTypes } from "sequelize";
import { fakerPT_BR as faker } from "@faker-js/faker";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

/* eslint-disable import/no-unused-modules */
export const up = async () => {
  await queryInterface.createTable("menu", {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    label: {
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
    queryInterface.bulkInsert("menu", [
      {
        uuid: faker.string.uuid(),
        label: "Destaques",
        url: "#destaques",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        label: "Outras notícias",
        url: "#outras",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        label: "Vídeos",
        url: "#videos",
        createdAt: faker.date.anytime()
      },
    ]);
  });
};

/* eslint-disable import/no-unused-modules */
export const down = async () => {
  await queryInterface.dropTable("menu");
};