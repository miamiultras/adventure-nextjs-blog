import { Post } from "./Post";

export interface Place {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  posts?: Post[];
}
