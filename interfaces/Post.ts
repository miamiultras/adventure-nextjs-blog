import { Place } from "./Place";

export interface Post {
  id: string;
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  place?: Place | null;
  placeId: string;
}
