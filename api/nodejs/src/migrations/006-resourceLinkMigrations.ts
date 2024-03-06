import { DataTypes } from "sequelize";
import { fakerPT_BR as faker } from "@faker-js/faker";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

/* eslint-disable import/no-unused-modules */
export const up = async () => {
  await queryInterface.createTable("resource_link", {
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
    queryInterface.bulkInsert("resource_link", [
      {
        uuid: faker.string.uuid(),
        label: "Últimas notícias",
        url: "https://www.estadao.com.br/ultimas/",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        label: "Podcast",
        url: "https://www.estadao.com.br/podcasts/",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        label: "Agência Estado",
        url: "http://institucional.ae.com.br/",
        createdAt: faker.date.anytime()
      },
    ]);
  });
};

/* eslint-disable import/no-unused-modules */
export const down = async () => {
  await queryInterface.dropTable("resource_link");
};