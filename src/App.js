import { useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import MobileNavbar from "./components/Header/MobileNavbar";
import SliderCard from "./components/UI/SliderCard";

function App() {
  // useEffect(() => {
  //   Aos.init();
  // }, []);

  return (
    <>
      <Header />
      <MobileNavbar />
      <main>
        <Hero />
        <SliderCard />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
