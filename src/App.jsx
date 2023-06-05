import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="main-wrapper">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
