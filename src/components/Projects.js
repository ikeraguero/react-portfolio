import project1 from "../img/project1.png";
import project2 from "../img/project2.png";

const projects = [
  {
    name: "Childcare Brasil 🧒",
    descPostion: "right",
    description:
      "Plataforma desenvolvida para uma organização beneficente fictícia. Nela, é possível realizar doações em dinheiro para crianças e escolas carentes de todo o Brasil. O website oferece uma interface que, além de realizar doações, possibilita cadastrar, remover e editar crianças e escolas através da conta administradora.",
    stack: ["Vue", "Node", "Express", "MongoDB"],
    image: project1,
  },
  {
    name: "Fitmap 🗺️",
    descPostion: "left",
    description:
      "Plataforma que possibilita o usuário acompanhar e registrar sua rotina de exercícios feitos em uma determinada região, possibilitando que adicione marcadores ao mapa de sua localidade atual renderizada utilizando a API Geolocation e a biblioteca Leaflet.",
    stack: ["JavaScript Vanilla", "POO"],
    image: project2,
  },
];

export default function Projects() {
  return (
    <section
      className="section projects-section container"
      id="projects-section"
    >
      <h3 className="projects-text">PORTFOLIO</h3>
      <h4>Projetos em que já trabalhei 🧩</h4>
      <div className="project-list">
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            stack={project.stack}
            image={project.image}
            direction={project.descPostion}
          />
        ))}
      </div>
    </section>
  );
}

function Project({ name, description, stack, image, direction }) {
  return (
    <div className="project">
      {direction === "right" ? (
        <>
          <div className="project-image">
            <img src={image} alt="" className="img" />
          </div>
          <div className="project-text">
            <span className="project-title">{name}</span>
            <p className="project-description">{description}</p>
            <p className="project-stack">
              <ul className="stack-list">
                {stack.map((item) => (
                  <li>{item}</li>
                ))}
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
        </>
      ) : (
        <>
          <div className="project-text">
            <span className="project-title">{name}</span>
            <p className="project-description">{description}</p>
            <p className="project-stack">
              <ul className="stack-list">
                {stack.map((item) => (
                  <li>{item}</li>
                ))}
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
          <div className="project-image">
            <img src={image} alt="" className="img" />
          </div>
        </>
      )}
    </div>
  );
}
