import { DataTypes, QueryTypes } from "sequelize";
import { fakerPT_BR as faker } from "@faker-js/faker";

import { sequelize } from "../models";
const queryInterface = sequelize.getQueryInterface();

import { textToSlug } from "../utils";

/* eslint-disable import/no-unused-modules */
export const up = async() => {
   await queryInterface.createTable("news", {
     uuid: {
       allowNull: false,
       primaryKey: true,
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
     },
     title: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     description: {
       type: DataTypes.TEXT,
       allowNull: false,
     },
     image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     newsCategoryUuid: {
       type: DataTypes.UUID,
       allowNull: false,
       references: {
         model: "news_category",
         key: "uuid",
       },
       onUpdate: "CASCADE",
       onDelete: "RESTRICT",
     },
     newsAuthorUuid: {
       type: DataTypes.UUID,
       allowNull: true,
       references: {
         model: "news_author",
         key: "uuid",
       },
       onUpdate: "CASCADE",
       onDelete: "RESTRICT",
     },
     highlight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
     slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
     deletedAt: DataTypes.DATE
   }).finally( async() => {
    const fakeNews: Array<{}> = [];

    const [categories, authors] = await Promise.all([
      sequelize.query("SELECT uuid FROM news_category", { type: QueryTypes.SELECT }),
      sequelize.query("SELECT uuid FROM news_author", { type: QueryTypes.SELECT }),
    ]);

    for (let i: number = 0; i <= 20; i++) {
      const title = faker.lorem.sentence({ min: 4, max: 12 });
      const categoryUuid: any = categories[Math.floor(Math.random() * categories.length)];
      const authorUuid: any = authors[Math.floor(Math.random() * authors.length)];

      fakeNews.push({
        uuid: faker.string.uuid(),
        title: title,
        description: faker.lorem.paragraphs(),
        image: faker.image.urlPicsumPhotos({ width: 1200, height: 1200 }),
        newsCategoryUuid: categoryUuid.uuid,
        newsAuthorUuid: authorUuid.uuid,
        highlight: faker.datatype.boolean({ probability: 0.5 }),
        slug: textToSlug(title),
        createdAt: faker.date.anytime()
      });
    }

    queryInterface.bulkInsert("news", fakeNews);
  });
};

/* eslint-disable import/no-unused-modules */
export const down = async() => {
  await queryInterface.dropTable("news");
};
