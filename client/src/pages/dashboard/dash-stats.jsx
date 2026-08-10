import "./dash-stats.css";

const DashStats = () => {
  const dashstats = [
    {
      name: "Total Snippets",
      value: "0",
    },
    {
      name: "Languages",
      value: "0",
    },
    {
      name: "Favourites",
      value: "0",
    },
    {
      name: "Top Language",
      value: "--",
    },
  ];

  return (
    <div className="dashstats">
      <div className="dasher">
        {dashstats.map((stat, index) => (
          <div className="dashstat" key={index}>
            <h2>{stat.name}</h2>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashStats;
