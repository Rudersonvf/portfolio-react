import { ProjectDTO } from "../../models/ProjectDTO";
import CategoryBox from "../CategoryBox";
import "./styles.css";

type Props = {
  project: ProjectDTO;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="pf-project-card">
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="pf-categories-container">
        <CategoryBox categories={project.categories} />
      </div>
    </div>
  );
}
