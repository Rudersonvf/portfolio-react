import { CategoryDTO } from "../../models/CategoryDTO";
import "./styles.css";

type Props = {
  categories: CategoryDTO[];
};

export default function CategoryBox({ categories }: Props) {
  return (
    <div className="pf-category-box">
      {categories.map((category) => (
        <span key={category.id} className="category">
          {category.name}
        </span>
      ))}
    </div>
  );
}
