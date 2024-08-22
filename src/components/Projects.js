import project1 from "../img/project1.png";
import project2 from "../img/project2.png";

export default function Projects() {
  return (
    <section
      className="section projects-section container"
      id="projects-section"
    >
      <h3 className="projects-text">PORTFOLIO</h3>
      <h4>Projetos em que já trabalhei 🧩</h4>
      <div className="project-list">
        <div className="project">
          <div className="project-image">
            <img src={project1} alt="" className="img" />
          </div>
          <div className="project-text">
            <span className="project-title">Childcare Brasil 🧒</span>
            <p className="project-description">
              Plataforma desenvolvida para uma organização beneficente fictícia.
              Nela, é possível realizar doações em dinheiro para crianças e
              escolas carentes de todo o Brasil. O website oferece uma interface
              que, além de realizar doações, possibilita cadastrar, remover e
              editar crianças e escolas através da conta administradora.
            </p>
            <p className="project-stack">
              <ul className="stack-list">
                <li>Vue</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </p>
            <div className="project-links">
              <a
                href="https://github.com/ikeraguero/childcare-brasil"
                target="_blank"
              >
                <ion-icon
                  name="logo-github"
                  className="logo-project"
                ></ion-icon>
                <span>Github</span>
              </a>
              <a href="https://childcarebrasil.netlify.app/" target="_blank">
                <ion-icon name="create-outline"></ion-icon>
                <span>Deploy</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-text">
            <span className="project-title">Fitmap 🗺️</span>
            <p className="project-description">
              Plataforma que possibilita o usuário acompanhar e registrar sua
              rotina de exercícios feitos em uma determinada região,
              possibilitando que adicione marcadores ao mapa de sua localidade
              atual renderizada utilizando a API Geolocation e a biblioteca
              Leaflet.
            </p>{" "}
            {/* Properly closed <p> tag */}
            <p className="project-stack">
              <ul className="stack-list">
                <li>JavaScript Vanilla</li>
                <li>POO</li>
              </ul>
            </p>
            <div className="project-links">
              <a href="https://github.com/ikeraguero/fitmap" target="_blank">
                <ion-icon
                  name="logo-github"
                  className="logo-project"
                ></ion-icon>
                <span>Github</span>
              </a>
              <a href="https://ikeraguero-fitmap.netlify.app/" target="_blank">
                <ion-icon name="create-outline"></ion-icon>
                <span>Deploy</span>
              </a>
            </div>
          </div>
          <div className="project-image">
            <img src={project2} alt="" className="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
