import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-700" : "fw-400")}
          to={"/about"}
        >
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-700" : "fw-400")}
          to={"/projects"}
        >
          Projetos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-700" : "fw-400")}
          to={"/contact"}
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
}
