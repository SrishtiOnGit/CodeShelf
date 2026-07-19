import "./hero.css";

const hero = () => {
  return (
    <div className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1>Your personal library for reusable code snippets.</h1>

        <div className="hero-container">
          <button className="hero-start">Start For Free</button>
          <button className="hero-btn">Features</button>
        </div>
      </div>
    </div>
  );
};

export default hero;
