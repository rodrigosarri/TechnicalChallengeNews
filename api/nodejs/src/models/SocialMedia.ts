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

import { ISocialMedia } from "./interfaces";

@Table({
  tableName: "social_media",
  timestamps: true,
  paranoid: true
})

export class SocialMedia extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  uuid!: string;

  @AllowNull(false)
  @Column
  icon!: string;

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
  const fields: ISocialMedia = {
    icon: "Ícone",
    url: "URL",
  };

  return fields[field] ? fields[field] : field;
};