import { CategoryDTO } from "./CategoryDTO";

export type ProjectDTO = {
  id: number;
  name: string;
  about: string;
  description: string;
  photo_url: string;
  how_to: string;
  categories: CategoryDTO[];
};
