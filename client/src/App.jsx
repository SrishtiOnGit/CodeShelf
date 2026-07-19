import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProblemGraph from "./components/problem";
import Features from "./components/features";
import Works from "./components/works";
import FAQ from "./components/faq";
import CTA from "./components/cta";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemGraph />
      <Features />
      <Works />
      <FAQ />
      <CTA />
    </>
  );
}

export default App;
