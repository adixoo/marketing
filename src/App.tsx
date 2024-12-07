import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "./components/Hero";
import { SubHero } from "./components/SubHero";
// import { Navbar } from "./components/Navbar2";
function App() {
  return (
    <>
      <Navbar />
      <main className="antialiased">
        <Hero />
        <SubHero />
      </main>
      <Footer />
    </>
  );
}

export default App;
