import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Contact } from "./components/sections/contact/Contact";
import { Experience } from "./components/sections/experience/Experience";
import { Hero } from "./components/sections/hero/Hero";
import { Projects } from "./components/sections/projects/Projects";
import { Stack } from "./components/sections/stack/Stack";

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
