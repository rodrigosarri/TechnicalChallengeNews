export interface PostCategoryProps {
  highlight: boolean;
  author: {
    name: string;
    url: string;
  };
  date: string;
  views?: number;
  shares?: number;
}
