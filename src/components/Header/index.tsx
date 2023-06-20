import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-700" : "fw-400")}
          to={""}
        >
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-700" : "fw-400")}
          to={""}
        >
          Projetos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-700" : "fw-400")}
          to={""}
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
}
