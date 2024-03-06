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
  BelongsTo
} from "sequelize-typescript";

import { INewsMetadata } from "./interfaces";

import { News } from "./News";

@Table({
  tableName: "news_metadata",
  timestamps: true,
  paranoid: true
})

export class NewsMetadata extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  uuid!: string;

  @AllowNull(false)
  @ForeignKey(() => News)
  @Column
  newsUuid!: string;

  @BelongsTo(() => News, {foreignKey: "newsUuid", as: "news"})
  news!: News;

  @AllowNull(true)
  @Column
  views!: number;

  @AllowNull(true)
  @Column
  shares!: number;

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
  const fields: INewsMetadata = {
    newsUuid: "UUID Notícia",
    views: "Visualizações",
    shares: "Compartilhamentos",
  };

  return fields[field] ? fields[field] : field;
};