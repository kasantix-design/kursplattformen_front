// 📄 src/pages/interaksjon/Epost.tsx
import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

export default function Epost() {
  const [epost, setEpost] = useState("")
  const [melding, setMelding] = useState("")
  const [status, setStatus] = useState("")

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/api/epost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ epost, melding }),
    })

    if (res.ok) {
      setStatus("E-post sendt!")
      setEpost("")
      setMelding("")
    } else {
      setStatus("Feil ved sending.")
    }
  }

  return (
    <div className="content-area">
      <div className="content-box">
        <h2>Kontakt admin</h2>
        <form onSubmit={handleSend}>
          <label>Din e-post</label>
          <input
            type="email"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            required
          />

          <label>Melding</label>
          <textarea
            rows={8}
            value={melding}
            onChange={(e) => setMelding(e.target.value)}
            required
          />

          <button type="submit" className="form-btn-green">Send e-post</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  )
}
