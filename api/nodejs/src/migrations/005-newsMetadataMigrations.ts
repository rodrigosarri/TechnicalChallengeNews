import { DataTypes } from "sequelize";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

/* eslint-disable import/no-unused-modules */
export const up = async() => {
   await queryInterface.createTable("news_metadata", {
     uuid: {
       allowNull: false,
       primaryKey: true,
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
     },
     newsUuid: {
       type: DataTypes.UUID,
       allowNull: false,
       references: {
         model: "news",
         key: "uuid",
       },
       onUpdate: "CASCADE",
       onDelete: "CASCADE",
     },
     views: {
       type: DataTypes.INTEGER,
       allowNull: false,
     },
     shares: {
       type: DataTypes.INTEGER,
       allowNull: false,
     },
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
     deletedAt: DataTypes.DATE
   });
};

/* eslint-disable import/no-unused-modules */
export const down = async() => {
   await queryInterface.dropTable("news_metadata");
};
