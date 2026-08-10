import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import Footer from "./components/footer";
import SignUp from "./pages/auth/signup";
import Dashboard from "./pages/dashboard/dashboard";
function HomePage() {
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
      <Footer />
    </>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
