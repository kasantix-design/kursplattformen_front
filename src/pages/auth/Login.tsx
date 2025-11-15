import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) throw new Error("Feil e-post eller passord")
      const data = await res.json()
      localStorage.setItem("token", data.token)
      localStorage.setItem("bruker", JSON.stringify(data.user))
      navigate(data.user.role === "admin" ? "/admin" : "/medlem")
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="content-box">
      <h2>Logg inn</h2>
      <form onSubmit={handleLogin}>
        <label>E-post</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Passord</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn">Logg inn</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}
