import Button from "../../../components/Button";
import Tittle from "../../../components/Tittle";
import "./styles.css";

export default function About() {
  return (
    <main>
      <section className="pf-container">
        <div className="pf-about-container">
          <img
            src="https://avatars.githubusercontent.com/u/110832016?v=4"
            alt="me"
          />
          <div className="pf-text-about-container">
            <p className="pf-text-about">
              Olá, me chamo Ruderson Florentino, tenho 32 anos e sou apaixonado
              por programação! Sou dinâmico, proativo e comprometido. Busco
              sempre dar o meu melhor para contribuir, aprender, compartilhar e
              aplicar conhecimento adquirido em prol da equipe e projeto.
            </p>
          </div>
        </div>
        <div className="pf-btn-container">
          <Button text={"DOWNLOAD CV"} />
        </div>
      </section>
      <section className="pf-container">
       <Tittle text={"HABILIDADES"}/>
      </section>
    </main>
  );
}
