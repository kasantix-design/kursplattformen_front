import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Testbrukere i frontend
    if (email === "admin@test.no" && password === "1234") {
      localStorage.setItem("token", "test123");
      localStorage.setItem("bruker", JSON.stringify({ role: "admin", email }));
      return navigate("/admin");
    }

    if (email === "medlem@test.no" && password === "1234") {
      localStorage.setItem("token", "test123");
      localStorage.setItem("bruker", JSON.stringify({ role: "medlem", email }));
      return navigate("/medlem");
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Feil e-post eller passord");
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("bruker", JSON.stringify(data.user));
      navigate(data.user.role === "admin" ? "/admin" : "/medlem");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="content-box login-page">
      <img
        src="/logo192.png"
        alt="Logo"
        style={{ width: "150px", display: "block", margin: "0 auto 2rem" }}
      />
      <h2>Logg inn</h2>
      <form onSubmit={handleLogin}>
        <label>E-post</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Passord</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Logg inn</button>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <a href="#" onClick={() => alert("Funksjon for glemt passord kommer snart!")}>
            Har du glemt passord?
          </a>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
