import { useState, useEffect } from "react";
import DashNav from "./dash-nav";
import DashStats from "./dash-stats";
import Modal from "./modal";
import SnippetList from "./snippet_list";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [snippets, setSnippets] = useState([]);

  const fetchSnippets = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/snippets/");

      if (!response.ok) {
        throw new Error("Failed to fetch snippets");
      }

      const data = await response.json();

      console.log("SNIPPETS:", data);

      setSnippets(data);
    } catch (error) {
      console.error("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, []);

  const handleDelete = (id) => {
    setSnippets((prev) => prev.filter((snippet) => snippet.id !== id));
  };

  return (
    <div>
      <DashNav onOpen={() => setOpenModal(true)} />

      <DashStats snippets={snippets} />

      <SnippetList snippets={snippets} onDelete={handleDelete} />

      {openModal && (
        <Modal
          onClose={() => setOpenModal(false)}
          onSaved={() => {
            setOpenModal(false);
            fetchSnippets();
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
