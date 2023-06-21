import { ProjectDTO } from "../../models/ProjectDTO";
import "./styles.css";

type Props ={
    project: ProjectDTO
}

export default function ProjectCard({project}: Props) {
    return(
        <div className="pf-project-card">
            <h3>{project.name}</h3>
            <p>{project.about}</p>
        </div>
    );
}