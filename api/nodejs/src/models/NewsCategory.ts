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

import { INewsCategory } from "./interfaces";

@Table({
  tableName: "news_category",
  timestamps: true,
  paranoid: true
})

export class NewsCategory extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  uuid!: string;

  @AllowNull(false)
  @Column
  label!: string;

  @AllowNull(false)
  @Column
  url!: string;

  @AllowNull(false)
  @Column
  color!: string;

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
  const fields: INewsCategory = {
    label: "Título",
    url: "URL",
    color: "Cor"
  };

  return fields[field] ? fields[field] : field;
};