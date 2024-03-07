import { Request, Response } from "express";
import { ValidationError , Op } from "sequelize";


import { INewsFindAllOptions } from "./interface";

import { News, NewsCategory, NewsAuthor, NewsMetadata } from "../models";
import { getUserFieldDescriptions } from "../models/News";
import { httpErrors, formatSequelizeErrorItems } from "../utils";

class NewsController {
  private module: string;

  constructor() {
    this.module = "Notícia";

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description, image, newsCategoryUuid, newsAuthorUuid, highlight, slug } = req.body;
      const create = await News.create({ title, description, image, newsCategoryUuid, newsAuthorUuid, highlight, slug });

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
      const options: INewsFindAllOptions = {};

      if (req.query.orderBy) {
        options.order = [["createdAt", req.query.orderBy.toString().toUpperCase()]];
      }

      if (req.query.limit && !isNaN(Number(req.query.limit))) {
        options.limit = Number(req.query.limit);
      }

      if (req.query.q) {
        options.where = {
          title: {
            [Op.like]: `%${req.query.q}%`
          }
        };
      }

      if (req.query.newsCategoryUuid) {
        options.where = {
          newsCategoryUuid: {
            [Op.eq]: req.query.newsCategoryUuid as string
          }
        };
      }

      if (req.query.newsAuthorUuid) {
        options.where = {
          newsAuthorUuid: {
            [Op.eq]: req.query.newsAuthorUuid as string
          }
        };
      }

      if (req.query.slug) {
        options.where = {
          slug: {
            [Op.eq]: req.query.slug as string
          }
        };
      }

      if (req.query.offset) {
        options.offset = Number(req.query.offset);
      }

      const findAll = await News.findAll({...options,   include: [
        {
          model: NewsCategory,
          as: "newsCategory"
        },
        {
          model: NewsAuthor,
          as: "newsAuthor"
        },
        {
          model: NewsMetadata,
          as: "newsMetadata"
        }
      ]});

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
      const findByPk = await News.findByPk(uuid);

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
      const { title, description, image, newsCategoryUuid, newsAuthorUuid, highlight, slug } = req.body;

      const findByPk = await News.findByPk(uuid);

      if (!findByPk) {
        return res.status(404).json({
          error: {
            message: httpErrors.getMessage("MESSAGE_NOT_FOUND", this.module)
          }
        });
      }

      await findByPk.update({ title, description, image, newsCategoryUuid, newsAuthorUuid, highlight, slug });
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

      const findByPk = await News.findByPk(uuid);

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

export default new NewsController();
