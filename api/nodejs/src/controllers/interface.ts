import { Op } from "sequelize";

export interface IMenuFindAllOptions {
  order?: [string, string][];
  limit?: number;
  where?: {
    label?: {
      [Op.like]: string;
    };
  };
}

export interface INewsAuthorFindAllOptions {
  order?: [string, string][];
  limit?: number;
  where?: {
    name?: {
      [Op.like]: string;
    };
    url?: {
      [Op.eq]: string;
    };
  };
}

export interface INewsCategoryFindAllOptions {
  order?: [string, string][];
  limit?: number;
  where?: {
    label?: {
      [Op.like]: string;
    };
    url?: {
      [Op.eq]: string;
    };
  };
}

export interface INewsFindAllOptions {
  order?: [string, string][];
  limit?: number;
  where?: {
    title?: {
      [Op.like]: string;
    };
    newsCategoryUuid?: {
      [Op.eq]: string;
    };
    newsAuthorUuid?: {
      [Op.eq]: string;
    },
    slug?: {
      [Op.eq]: string;
    },
  };
  offset?: number;
}

export interface INewsMetadataFindAllOptions {
  order?: [string, string][];
  limit?: number;
}

export interface IResourceLinkFindAllOptions {
  order?: [string, string][];
  limit?: number;
  where?: {
    label?: {
      [Op.like]: string;
    };
  };
}

export interface ISocialMediaFindAllOptions {
  order?: [string, string][];
  limit?: number;
  where?: {
    label?: {
      [Op.like]: string;
    };
  };
}