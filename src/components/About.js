import photo from "../img/laptop.png";

export default function About() {
  return (
    <section className="section about-section container " id="about-section">
      <div className="about-features">
        <div className="about-photo">
          <img src={photo} alt="" className="img laptop-img" />
        </div>
        <div className="about-text">
          <h3>SOBRE MIM</h3>
          <h4>Desenvolvedor Web em Joinville, SC 📍</h4>
          <p>
            Olá, me chamo Iker Aguero Pires, tenho 20 anos, sou formado Técnico
            em Informática pelo IFC e atualmente sou estudante de Análise e
            Desenvolvimento de Sistemas na UDESC. Atualmente atuo como
            Estagiário de Desenvolvimento de Software na SoftExpert Software.
            <br />
            <br />
            Minha principal motivação é aprender e evoluir mais a cada dia para
            que possa fazer a diferença com minhas habilidades!
          </p>
        </div>
      </div>
    </section>
  );
}
