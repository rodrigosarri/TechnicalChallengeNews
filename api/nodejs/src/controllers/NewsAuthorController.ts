import { Request, Response } from "express";
import { ValidationError , Op } from "sequelize";


import { INewsAuthorFindAllOptions } from "./interface";

import { NewsAuthor } from "../models";
import { getUserFieldDescriptions } from "../models/NewsAuthor";
import { httpErrors, formatSequelizeErrorItems } from "../utils";

class NewsAuthorController {
  private module: string;

  constructor() {
    this.module = "Autor da Notícia";

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, url } = req.body;
      const create = await NewsAuthor.create({ name, url });

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
      const options: INewsAuthorFindAllOptions = {};

      if (req.query.orderBy) {
        options.order = [["createdAt", req.query.orderBy.toString().toUpperCase()]];
      }

      if (req.query.limit && !isNaN(Number(req.query.limit))) {
        options.limit = Number(req.query.limit);
      }

      if (req.query.q) {
        options.where = {
          name: {
            [Op.like]: `%${req.query.q}%`
          }
        };
      }

      if (req.query.slug) {
        options.where = {
          url: {
            [Op.eq]: req.query.slug as string
          }
        };
      }

      const findAll = await NewsAuthor.findAll(options);

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
      const findByPk = await NewsAuthor.findByPk(uuid);

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
      const { name, url } = req.body;

      const findByPk = await NewsAuthor.findByPk(uuid);

      if (!findByPk) {
        return res.status(404).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_NOT_FOUND", this.module)
          }
        });
      }

      await findByPk.update({ name, url });
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

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { uuid } = req.params;

      const findByPk = await NewsAuthor.findByPk(uuid);

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

export default new NewsAuthorController();
