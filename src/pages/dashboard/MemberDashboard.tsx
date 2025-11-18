import { useNavigate } from "react-router-dom";

export default function MemberDashboard() {
  const navigate = useNavigate();

  const brukerNavn = localStorage.getItem("username") || "medlem";

  return (
    <div className="content-area">
      <h1>Velkommen, {brukerNavn}!</h1>

      <section className="content-box">
        <h2>Ditt område</h2>
        <div className="book-grid">
          <button className="btn" onClick={() => navigate("/kurs")}>
            Mine kurs
          </button>
          <button className="btn" onClick={() => navigate("/undervisning/opptak")}>
            Tidligere opptak
          </button>
          <button className="btn" onClick={() => navigate("/videomote")}>
            Delta i videomøte
          </button>
          <button className="btn" onClick={() => navigate("/blogg")}>
            Les blogg
          </button>
          <button className="btn" onClick={() => navigate("/notater")}>
            Notater
          </button>
          <button className="btn" onClick={() => navigate("/epost")}>
            Kontakt admin
          </button>
        </div>
      </section>
    </div>
  );
}
