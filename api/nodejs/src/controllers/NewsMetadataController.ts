import { Request, Response } from "express";
import { ValidationError } from "sequelize";

import { INewsMetadataFindAllOptions } from "./interface";

import { NewsMetadata } from "../models";
import { getUserFieldDescriptions } from "../models/NewsMetadata";
import { httpErrors, formatSequelizeErrorItems } from "../utils";

class NewsMetadataController {
  private module: string;

  constructor() {
    this.module = "Metadados da Notícia";

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.incrementView = this.incrementView.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { newsUuid, views, shares } = req.body;
      const create = await NewsMetadata.create({ newsUuid, views, shares });

      return res.status(201).json(create);
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = formatSequelizeErrorItems(getUserFieldDescriptions, error.errors);

        return res.status(400).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_ERRORS", this.module),
            error: errors
          }
        });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module),
          error: error
        }
      });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const options: INewsMetadataFindAllOptions = {};

      if (req.query.orderBy) {
        options.order = [["createdAt", req.query.orderBy.toString().toUpperCase()]];
      }

      if (req.query.limit && !isNaN(Number(req.query.limit))) {
        options.limit = Number(req.query.limit);
      }

      const findAll = await NewsMetadata.findAll(options);

      if (findAll.length > 0) {
        return res.status(200).json(findAll);
      } else {
        return res.status(204).json(null);
      }

    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module)
        }
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { uuid } = req.params;
      const findByPk = await NewsMetadata.findByPk(uuid);

      if (!findByPk) {
        return res.status(404).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_NOT_FOUND", this.module)
          }
        });
      }

      return res.status(200).json(findByPk);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module)
        }
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { uuid } = req.params;
      const { newsUuid, views, shares } = req.body;

      const findByPk = await NewsMetadata.findByPk(uuid);

      if (!findByPk) {
        return res.status(404).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_NOT_FOUND", this.module)
          }
        });
      }

      await findByPk.update({ newsUuid, views, shares });
      return res.status(200).json(findByPk);

    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = formatSequelizeErrorItems(getUserFieldDescriptions, error.errors);

        return res.status(400).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_ERRORS", this.module),
            error: errors
          }
        });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module)
        }
      });
    }
  }

  public async incrementView(req: Request, res: Response): Promise<Response> {
    try {
      const { newsUuid } = req.body;

      if (!newsUuid) {
        return res.status(400).json({
          error: {
            message: "Erro ao salvar Metadados da Notícia",
            error: [
              {
                "field": "newsUuid",
                "errors": [
                  "O campo UUID Notícia não pode ficar vazio"
                ]
              }
            ]
          }
        });
      }

      const [newsMetadata, created] = await NewsMetadata.findOrCreate({
        where: { newsUuid },
        defaults: {
          views: 1,
          shares: 0,
        }
      });

      if (!created) {
        await newsMetadata.increment("views", { by: 1 });
      }

      return res.status(created ? 201 : 200).json(newsMetadata);
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = formatSequelizeErrorItems(getUserFieldDescriptions, error.errors);

        return res.status(400).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_ERRORS", this.module),
            error: errors
          }
        });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module),
          error: error
        }
      });
    }
  }

  public async incrementShare(req: Request, res: Response): Promise<Response> {
    try {
      const { newsUuid } = req.body;

      if (!newsUuid) {
        return res.status(400).json({
          error: {
            message: "Erro ao salvar Metadados da Notícia",
            error: [
              {
                "field": "newsUuid",
                "errors": [
                  "O campo UUID Notícia não pode ficar vazio"
                ]
              }
            ]
          }
        });
      }

      const [newsMetadata, created] = await NewsMetadata.findOrCreate({
        where: { newsUuid },
        defaults: {
          views: 0,
          shares: 1,
        }
      });

      if (!created) {
        await newsMetadata.increment("shares", { by: 1 });
      }

      return res.status(created ? 201 : 200).json(newsMetadata);
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = formatSequelizeErrorItems(getUserFieldDescriptions, error.errors);

        return res.status(400).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_ERRORS", this.module),
            error: errors
          }
        });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module),
          error: error
        }
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { uuid } = req.params;

      const findByPk = await NewsMetadata.findByPk(uuid);

      if (!findByPk) {
        return res.status(404).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_NOT_FOUND", this.module)
          }
        });
      }

      await findByPk.destroy();
      return res.status(200).json({
        message: httpErrors.getMessage("MESSAGE_DELETED", this.module)
      });

    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }

      return res.status(500).json({
        error: {
          message: httpErrors.getMessage("MESSAGE_UNKNOWN_ERROR", this.module)
        }
      });
    }
  }
}

export default new NewsMetadataController();
