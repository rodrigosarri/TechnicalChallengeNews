import { PostItem } from "../Post/interface";

export interface SectionGridProps {
  type: "highlight" | "list";
  posts: PostItem[]
}