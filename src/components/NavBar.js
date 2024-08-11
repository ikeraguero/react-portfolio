export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-name">
        <span>Iker Aguero Pires</span>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#hero-section" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about-section" className="nav-link">
            Sobre
          </a>
        </li>
        <li>
          <a href="#projects-section" className="nav-link">
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact-section" className="nav-link">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
