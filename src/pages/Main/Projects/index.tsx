import ProjectCard from "../../../components/ProjectCard";
import Tittle from "../../../components/Tittle";
import "./styles.css";

export default function Projects() {
  return (
    <main>
      <section className="pf-container">
        <Tittle text={"PROJETOS"} />
        <div className="pf-projects-container">
          <ProjectCard project={{
            id: 0,
            name: "",
            about: "",
            description: "",
            photo_url: "",
            how_to: "",
            categories: []
          }} />
        </div>
      </section>
    </main>
  );
}
