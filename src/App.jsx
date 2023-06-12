import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context/GlobalContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  const { screenSize } = useGlobalContext();

  return (
    <div className="main-wrapper">
      <Navbar />
      {!(screenSize.dynamicWidth >= 850) && <MobileNav />}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
