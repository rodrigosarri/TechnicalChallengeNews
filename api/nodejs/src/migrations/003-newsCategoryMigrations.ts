import { DataTypes } from "sequelize";
import { fakerPT_BR as faker } from "@faker-js/faker";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

/* eslint-disable import/no-unused-modules */
export const up = async () => {
  await queryInterface.createTable("news_category", {
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
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }).finally(() => {
    queryInterface.bulkInsert("news_category", [
      {
        uuid: faker.string.uuid(),
        label: "Tecnologia",
        url: "tecnologia",
        color: "#007aff",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        label: "Alimentação",
        url: "outras",
        color: "#ff4f00",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        label: "Esporte",
        url: "esporte",
        color: "#3cd289",
        createdAt: faker.date.anytime()
      },
    ]);
  });
};

/* eslint-disable import/no-unused-modules */
export const down = async () => {
  await queryInterface.dropTable("news_category");
};