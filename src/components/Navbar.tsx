// 📄 src/components/Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [rolle, setRolle] = useState<string | null>(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const bruker = JSON.parse(localStorage.getItem("bruker") || "{}");

      if (!token || !bruker?.role) {
        navigate("/login");
        return;
      }

      setRolle(bruker.role);
    } catch {
      navigate("/login");
    }
  }, [navigate]);

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
        {rolle === "admin" && (
          <Link to="/admin" className="btn">Adminpanel</Link>
        )}
        {rolle === "medlem" && (
          <Link to="/medlem" className="btn">Dashboard</Link>
        )}
        <Link to="/notater" className="btn">Notater</Link>
        <Link to="/undervisning" className="btn">Video</Link>
        <Link to="/opptak" className="btn">Opptak</Link>
        <Link to="/profil" className="btn">Profil</Link>
        <button className="btn" onClick={handleLogout}>Logg ut</button>
      </div>
    </nav>
  );
}
