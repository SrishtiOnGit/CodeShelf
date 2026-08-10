import { useState } from "react";
import "./modal.css";
import { IoClose } from "react-icons/io5";
import Editor from "@monaco-editor/react";

const Modal = ({ onClose }) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="snippet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Snippet</h2>

          <button className="close-btn" onClick={onClose} type="button">
            <IoClose size={24} />
          </button>
        </div>

        <div className="modal-body">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Authentication using JWT"
          />

          <label htmlFor="language">Language</label>

          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="react">React JSX</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
          </select>

          <label htmlFor="tags">Tags</label>
          <input id="tags" type="text" placeholder="react, auth, jwt" />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="3"
            placeholder="Short description..."
          />

          <label>Code</label>

          <Editor
            height="350px"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 15,
              roundedSelection: true,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: "on",
            }}
          />
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose} type="button">
            Cancel
          </button>

          <button className="save-btn" type="button">
            Save Snippet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
