import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProblemGraph from "./components/problem";
import Features from "./components/features";
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
    </>
  );
}

export default App;
