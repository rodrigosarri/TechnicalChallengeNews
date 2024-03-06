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
  DeletedAt
} from "sequelize-typescript";

import { IMenuAuthor } from "./interfaces";

@Table({
  tableName: "news_author",
  timestamps: true,
  paranoid: true
})

export class NewsAuthor extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  uuid!: string;

  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column
  url!: string;

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
  const fields: IMenuAuthor = {
    name: "Nome",
    url: "URL",
  };

  return fields[field] ? fields[field] : field;
};