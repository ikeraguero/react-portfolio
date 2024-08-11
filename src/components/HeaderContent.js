import photo from "../img/iker.jpeg";

export default function HeroSection() {
  return (
    <div className="header-content">
      <section className="hero-section" id="hero-section">
        <div className="hero-features">
          <div className="text">
            <h1 className="text-title">Desenvolvedor Web</h1>
            <h2 className="text-description">
              Olá, me chamo Iker Aguero Pires, e sou um apaixonado Desenvolvedor
              Web localizado em Joinville, SC 📍
            </h2>
            <div className="text-logos">
              <a
                href="https://www.linkedin.com/in/ikeragueropires"
                target="_blank"
              >
                <ion-icon name="logo-linkedin" className="logo"></ion-icon>
              </a>
              <a href="https://github.com/ikeraguero/" target="_blank">
                <ion-icon name="logo-github" className="logo"></ion-icon>
              </a>
            </div>
          </div>
          <div className="photo">
            <img src={photo} alt="Iker Aguero Pires" className="hero-photo" />
          </div>
        </div>
      </section>
    </div>
  );
}
