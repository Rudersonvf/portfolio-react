import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Main/Home";
import About from "../pages/Main/About";
import Projects from "../pages/Main/Projects";
import Contact from "../pages/Main/Contact";
import ProjectDetails from "../pages/Main/ProjectDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project-details/:id" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
