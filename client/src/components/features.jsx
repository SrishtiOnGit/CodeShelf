import "./features.css";

const Features = () => {
  const features = [
    {
      title: "Smart Search",
      description:
        "Find snippets instantly using keywords, tags, or programming languages.",
    },
    {
      title: "Collections",
      description:
        "Organize snippets into folders and collections for every project.",
    },
    {
      title: "Custom Tags",
      description: "Label snippets with tags to make searching effortless.",
    },
    {
      title: "Syntax Highlighting",
      description:
        "Read and edit beautifully formatted code with language-aware highlighting.",
    },
    {
      title: "Favourites",
      description: "Pin your most-used snippets for one-click access.",
    },
  ];
  return (
    <div className="features-container" id="features" data-aos="fade-up">
      <h1>Everything You Need</h1>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
