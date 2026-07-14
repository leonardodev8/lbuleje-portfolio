import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Experience } from "./components/sections/experience/Experience";
import { Hero } from "./components/sections/hero/Hero";
import { Projects } from "./components/sections/projects/Projects";
import { Stack } from "./components/sections/stack/Stack";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Stack />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;
