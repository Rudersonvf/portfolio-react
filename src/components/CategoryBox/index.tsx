import { CategoryDTO } from "../../models/CategoryDTO";
import "./styles.css";

type Props = {
  categories: CategoryDTO[];
};

export default function CategoryBox({ categories }: Props) {
  return (
    <div className="pf-category-container">
      {categories.map((category) => (
        <div key={category.id} className="pf-category-box">
          <span key={category.id} className="category">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  )
}
