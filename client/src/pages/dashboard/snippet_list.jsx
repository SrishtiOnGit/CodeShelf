import "./snippet_list.css";

const SnippetList = ({ snippets, onDelete }) => {
  const deleteSnippet = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/snippets/${id}/`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        onDelete(id);
      } else {
        console.log("Delete failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h2 className="snippet-title">Your Snippets</h2>

      <p className="snippet-count">{snippets.length} snippets</p>

      <div className="snippet-grid">
        {snippets.map((snippet) => (
          <article className="snippet-card" key={snippet.id}>
            <div className="snippet-card-top">
              <h3>{snippet.title}</h3>

              <span className="snippet-language">{snippet.language}</span>
            </div>

            <p>{snippet.description}</p>

            <div className="snippet-tags">
              {snippet.tags &&
                snippet.tags
                  .split(",")
                  .map((tag, index) => <span key={index}>{tag.trim()}</span>)}
            </div>

            <button
              onClick={() => deleteSnippet(snippet.id)}
              className="btn-delete"
            >
              Delete
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SnippetList;
