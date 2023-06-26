import { CategoryDTO } from "./CategoryDTO";

export type ProjectDTO = {
  id: number;
  name: string;
  about: string;
  description: string;
  photo_url: string;
  git_link: string;
  prod_link: string;
  categories: CategoryDTO[];
};
