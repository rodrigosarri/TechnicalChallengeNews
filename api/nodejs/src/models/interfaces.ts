export interface IMenu {
  [key: string]: string;
  label: string;
  url: string;
}

export interface INews {
  [key: string]: string;
  title: string;
  description: string;
  newsCategoryUuid: string;
  newsAuthorUuid: string;
  slug: string;
}

export interface IMenuAuthor {
  [key: string]: string;
  name: string;
  url: string;
}

export interface INewsCategory {
  [key: string]: string;
  label: string;
  url: string;
  color: string;
}

export interface INewsMetadata {
  [key: string]: string;
  newsUuid: string;
  views: string;
  shares: string;
}

export interface ISocialMedia {
  [key: string]: string;
  icon: string;
  url: string;
}



export interface IResourceLink {
  [key: string]: string;
  label: string;
  url: string;
}
