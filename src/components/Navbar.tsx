import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("bruker");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="btn">Kursplattform</Link>
      </div>
      <div>
        <Link to="/notater" className="btn">Notater</Link>
        <Link to="/undervisning" className="btn">Video</Link>
        <Link to="/opptak" className="btn">Opptak</Link>
        <Link to="/profil" className="btn">Profil</Link>
        <button className="btn" onClick={handleLogout}>Logg ut</button>
      </div>
    </nav>
  );
}
