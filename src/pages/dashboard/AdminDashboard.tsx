// src/pages/dashboard/AdminDashboard.tsx
import { useNavigate } from "react-router-dom";
import BlogEditor from "../../components/BlogEditor";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleNewPost = async (post: { title: string; content: string }) => {
    try {
      const res = await fetch(`${API_URL}/api/blogg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(post),
      });

      if (!res.ok) throw new Error("Kunne ikke publisere");
      alert("Innlegg publisert!");
    } catch (err) {
      console.error(err);
      alert("Feil ved publisering");
    }
  };

  return (
    <div className="content-area">
      <h1>Velkommen, Admin!</h1>

      <section className="content-box">
        <h2>Hurtigvalg</h2>
        <div className="book-grid">
          <button className="btn" onClick={() => navigate("/kurs")}>
            Se kurs
          </button>
          <button className="btn" onClick={() => navigate("/undervisning")}>
            Start video
          </button>
          <button className="btn" onClick={() => navigate("/videomote")}>
            Start videomøte
          </button>
          <button className="btn" onClick={() => navigate("/blogg")}>
            Se blogg
          </button>
          <button className="btn" onClick={() => navigate("/epost")}>
            Send e-post
          </button>
        </div>
      </section>

      <BlogEditor onSubmit={handleNewPost} />
    </div>
  );
}
