import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/hero/Hero";
import { Projects } from "./components/sections/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
