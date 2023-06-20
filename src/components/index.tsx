import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Header(){
    return(
        <header>
            <nav>
                <NavLink to={""}>Sobre</NavLink>
                <NavLink to={""}>Projetos</NavLink>
                <NavLink to={""}>Contato</NavLink>
            </nav>
        </header>
    );
}