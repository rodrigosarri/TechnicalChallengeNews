import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  IsUUID,
  Default,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
  HasOne
} from "sequelize-typescript";

import { INews } from "./interfaces";

import { NewsCategory } from "./NewsCategory";
import { NewsAuthor } from "./NewsAuthor";
import { NewsMetadata } from "./NewsMetadata";

@Table({
  tableName: "news",
  timestamps: true,
  paranoid: true
})

export class News extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  uuid!: string;

  @AllowNull(false)
  @Column
  title!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Column
  image!: string;

  @AllowNull(false)
  @ForeignKey(() => NewsCategory)
  @Column
  newsCategoryUuid!: string;

  @BelongsTo(() => NewsCategory, "newsCategoryUuid")
  newsCategory!: NewsCategory;

  @AllowNull(false)
  @ForeignKey(() => NewsAuthor)
  @Column
  newsAuthorUuid!: string;

  @BelongsTo(() => NewsAuthor, "newsAuthorUuid")
  newsAuthor!: NewsAuthor;

  @AllowNull(false)
  @Column
  highlight!: boolean;

  @AllowNull(false)
  @Column
  slug!: string;

  @HasOne(() => NewsMetadata, {foreignKey: "newsUuid", as: "newsMetadata"})
  newsMetadata!: NewsMetadata;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  @Column
  deletedAt!: Date;
}

export const getUserFieldDescriptions = (field: string): string => {
  const fields: INews = {
    title: "Título",
    description: "Descrição",
    newsCategoryUuid: "UUID Categoria",
    newsAuthorUuid: "UUID Autor",
    slug: "URL",
  };

  return fields[field] ? fields[field] : field;
};