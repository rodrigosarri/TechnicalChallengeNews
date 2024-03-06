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

import { IResourceLink } from "./interfaces";

@Table({
  tableName: "resource_link",
  timestamps: true,
  paranoid: true
})

export class ResourceLink extends Model {
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
  const fields: IResourceLink = {
    label: "Título",
    url: "URL",
  };

  return fields[field] ? fields[field] : field;
};