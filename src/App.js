import { useRef, useEffect } from "react";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeaderContent";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
function App() {
  const navRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const header = headerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          nav.classList.add("sticky");
        } else {
          nav.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  return (
    <body>
      <header ref={headerRef}>
        <NavBar ref={navRef} />
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
