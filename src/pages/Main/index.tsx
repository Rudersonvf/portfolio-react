import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import ArrowBack from "../../components/ArrowBack";
import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector("body");
    const isHomePage = window.location.pathname === "/home";
    if (body) {
      if (isHomePage) {
        body.classList.add("home");
      } else {
        body.classList.remove("home");
      }
    }
  }, [location]);

  return (
    /* captura a pagina atual com a função useLocation() e 
    atribui o valor na variavel e compara, se a condição for
    satisfeita, renderiza o componente */
    <>
      <Header />
      {location.pathname !== "/home" && <ArrowBack />}
      <Outlet />
      <Footer />
    </>
  );
}
