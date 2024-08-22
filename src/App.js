import NavBar from "./components/NavBar";
import HeroSection from "./components/HeaderContent";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
function App() {
  return (
    <body>
      <header>
        <NavBar />
        <HeroSection />
      </header>
      <article>
        <About />
        <Projects />
        <Footer />
      </article>
    </body>
  );
}

export default App;
