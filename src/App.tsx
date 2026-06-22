import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
