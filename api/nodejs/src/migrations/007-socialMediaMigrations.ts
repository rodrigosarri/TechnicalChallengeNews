import { DataTypes } from "sequelize";
import { fakerPT_BR as faker } from "@faker-js/faker";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

/* eslint-disable import/no-unused-modules */
export const up = async () => {
  await queryInterface.createTable("social_media", {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    icon: {
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
    queryInterface.bulkInsert("social_media", [
      {
        uuid: faker.string.uuid(),
        icon: "fa-facebook-f",
        url: "https://www.facebook.com/estadao",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        icon: "fa-x",
        url: "https://twitter.com/estadao/",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        icon: "fa-instagram",
        url: "https://www.instagram.com/estadao/",
        createdAt: faker.date.anytime()
      },
      {
        uuid: faker.string.uuid(),
        icon: "fa-pinterest",
        url: "https://br.pinterest.com/estadao/",
        createdAt: faker.date.anytime()
      },
    ]);
  });
};

/* eslint-disable import/no-unused-modules */
export const down = async () => {
  await queryInterface.dropTable("social_media");
};