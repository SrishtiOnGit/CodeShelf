import "./dash-stats.css";

const DashStats = ({ snippets }) => {
  const totalSnippets = snippets.length;

  const languages = new Set(snippets.map((snippet) => snippet.language));

  const languageCounts = {};

  snippets.forEach((snippet) => {
    const language = snippet.language;

    languageCounts[language] = (languageCounts[language] || 0) + 1;
  });

  const topLanguage =
    Object.entries(languageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "--";

  const dashstats = [
    {
      name: "Total Snippets",
      value: totalSnippets,
    },
    {
      name: "Languages",
      value: languages.size,
    },
    {
      name: "Favourites",
      value: "0",
    },
    {
      name: "Top Language",
      value: topLanguage,
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
