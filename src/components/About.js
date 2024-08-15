import photo from "../img/laptop.png";

export default function About() {
  return (
    <section class="section about-section container " id="about-section">
      <div class="about-features">
        <div class="about-photo">
          <img src={photo} alt="" class="img laptop-img" />
        </div>
        <div class="about-text">
          <h3>SOBRE MIM</h3>
          <h4>Desenvolvedor Web em Joinville, SC 📍</h4>
          <p>
            Olá, me chamo Iker Aguero Pires, tenho 19 anos, sou formado Técnico
            em Informática pelo IFC e atualmente sou estudante de Análise e
            Desenvolvimento de Sistemas na UDESC. Sou apaixonado por tecnologia
            e conhecimento e estou em busca da minha primeira experiência
            profissional na área!
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
