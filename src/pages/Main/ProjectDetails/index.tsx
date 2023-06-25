import { useParams } from "react-router-dom";
import "./styles.css";
import { ProjectDTO } from "../../../models/ProjectDTO";
import * as projectService from "../../../services/project-service";
import { useState, useEffect } from "react";

export default function ProjectDetails() {

    const params = useParams();

    const [project, setProject] = useState<ProjectDTO>();
  
    useEffect(() => {
      projectService.findById(Number(params.id)).then((response) => {
        setProject(response);
        console.log(response);
      })
      .catch(error => {
          console.log(error.response)
      });
    }, []);

    return(
        <main>
            <section>
                {project && <h1>Detalhes do projeto{project.name}</h1>}
            </section>
        </main>
    );
}