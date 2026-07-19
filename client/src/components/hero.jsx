import "./hero.css";
import { useNavigate } from "react-router-dom";

const hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1>Your personal library for reusable code snippets.</h1>

        <div className="hero-container">
          <button className="hero-start" onClick={() => navigate("/login")}>
            Start For Free
          </button>
          <button
            className="hero-btn"
            onClick={() =>
              document.getElementById("features")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
