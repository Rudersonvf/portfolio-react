import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
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
        <Tittle text={"HABILIDADES"} />
        <div className="pf-abilities-container">
          <div className="pf-abilities-card">
            <h3>BACK-END</h3>
            <div className="pf-abilities-details">
              <p>• Java</p>
              <p>• POO</p>
              <p>• Spring Boot</p>
              <p>• Maven</p>
              <p>• JPA</p>
              <p>• Postman</p>
            </div>
          </div>
          <div className="pf-abilities-card">
            <h3>FRONT-END</h3>
            <div className="pf-abilities-details">
              <p>• HTML</p>
              <p>• CSS</p>
              <p>• Java Script</p>
              <p>• Type Script</p>
              <p>• React</p>
              <p>• Sass</p>
            </div>
          </div>
          <div className="pf-abilities-card">
            <h3>DATA-BASE</h3>
            <div className="pf-abilities-details">
              <p>• MySQL</p>
              <p>• PostgreSQL</p>
              <p>• Modelagem de dados</p>
            </div>
          </div>
          <div className="pf-abilities-card">
            <h3>MISC</h3>
            <div className="pf-abilities-details">
              <p>• Versionamento: GIT</p>
              <p>• Docker</p>
              <p>• SEO</p>
              <p>• CI/CD </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
