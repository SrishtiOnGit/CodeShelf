import "./dash-nav.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const DashNav = ({ onOpen }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="dash-nav">
      <img src={logo} alt="logo" />
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Type to search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <button className="new-btn" onClick={onOpen}>
        + New
      </button>
    </div>
  );
};

export default DashNav;
