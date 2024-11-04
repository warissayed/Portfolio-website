import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import MobileNavbar from "./components/Header/MobileNavbar";
import SkillsAndExperience from "./components/UI/SkillsAndExperience";

function App() {
  return (
    <>
      <Header />
      <MobileNavbar />
      <main>
        <Hero />
        <SkillsAndExperience />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
