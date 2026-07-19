import "./problem.css";

const ProblemGraph = () => {
  return (
    <div data-aos="fade-up">
      <h1>The Problem</h1>
      <div className="problem-graph">
        <div className="first">
          <p className="bar-title">Searching</p>
          <p className="bar-text">18min per snippet</p>
        </div>
        <div className="second">
          <p className="bar-title">Duplicates</p>
          <p className="bar-text">42 recreated files</p>
        </div>
        <div className="third">
          <p className="bar-title">Projects</p>
          <p className="bar-text">7 places to search</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemGraph;
