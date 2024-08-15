import NavBar from "./components/NavBar";
import HeroSection from "./components/HeaderContent";
import About from "./components/About";
function App() {
  return (
    <body>
      <header>
        <NavBar />
        <HeroSection />
      </header>
      <article>
        <About />
      </article>
    </body>
  );
}

export default App;
