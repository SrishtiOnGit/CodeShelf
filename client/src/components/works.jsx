import { FaPlus, FaRegFolder } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import "./works.css";

const Works = () => {
  const works = [
    {
      icon: FaPlus,
      title: "Save Your Snippet",
      description:
        "Store reusable code with a title, language, and description.",
    },
    {
      icon: FaRegFolder,
      title: "Keep Everthing Organized",
      description:
        "Group snippets into collections and add custom tags for easy management.",
    },
    {
      icon: IoSearch,
      title: "Find In Seconds",
      description:
        "Search by keywords, tags, or programming language to locate exactly what you need.",
    },
    {
      icon: FaRegCopy,
      title: "Copy and Build",
      description:
        "Copy your snippet with one click and continue building without rewriting code.",
    },
  ];
  return (
    <div className="works" id="works" data-aos="fade-up">
      <h1>How it works?</h1>
      <div className="works-container">
        {works.map((work, index) => (
          <div className="work" key={index}>
            <div className="work-icon">
              <work.icon />
            </div>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
