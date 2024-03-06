interface PostCategory {
  uuid: string;
  label: string;
  url: string;
  color: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

interface PostAuthor {
  uuid: string;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

interface PostMetadata {
  uuid: string;
  views: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

export interface PostItem {
  uuid: string;
  title: string;
  description: string;
  image: string;
  newsCategoryUuid: string;
  newsAuthorUuid: string;
  highlight: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  newsCategory: PostCategory;
  newsAuthor: PostAuthor;
  newsMetadata?: PostMetadata | null;
}

export interface PostProps {
  highlight?: boolean;
  post?: PostItem;
}

export interface PostStyleProps {
  $highlight: boolean;
}
