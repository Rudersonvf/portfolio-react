import { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import Tittle from "../../../components/Tittle";
import "./styles.css";
import { ProjectDTO } from "../../../models/ProjectDTO";
import * as projectService from "../../../services/project-service";

export default function Projects() {
  const [data, setData] = useState<ProjectDTO[]>([]);

  useEffect(() => {
    projectService.findProjects().then((response) => {
      setData(response.data.content);
    });
  }, []);

  return (
    <main>
      <section className="pf-container">
        <Tittle text={"PROJETOS"} />
        <div className="pf-projects-container">
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
