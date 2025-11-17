import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rolle, setRolle] = useState("medlem")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("")

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Kun admin bør kunne registrere
        },
        body: JSON.stringify({ email, password, rolle }),
      })

      if (!res.ok) throw new Error("Feil ved registrering")
      setStatus("Bruker registrert!")
      setEmail("")
      setPassword("")
    } catch (err) {
      setStatus("Kunne ikke registrere bruker")
    }
  }

  return (
    <div className="content-box">
      <h2>Registrer ny bruker</h2>
      <p>Dette er kun tilgjengelig for administrator (eller ved invitasjon).</p>

      <form onSubmit={handleSubmit}>
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

        <label>Rolle</label>
        <select value={rolle} onChange={(e) => setRolle(e.target.value)}>
          <option value="medlem">Medlem</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="btn">Registrer</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  )
}
