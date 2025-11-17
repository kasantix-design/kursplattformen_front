import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

const kursvalg = [
  { id: "1", tittel: "Grunnkurs", pris: 499 },
  { id: "2", tittel: "Fordypning", pris: 899 },
]

export default function KjøpKurs() {
  const [valgt, setValgt] = useState("")
  const [laster, setLaster] = useState(false)

  const handleBetaling = async () => {
    if (!valgt) return

    setLaster(true)
    try {
      const res = await fetch(`${API_URL}/api/betaling/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ kursId: valgt }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url // 🚀 redirect til Stripe Checkout
      } else {
        alert("Klarte ikke å starte Stripe-betaling")
      }
    } catch (err) {
      console.error(err)
      alert("Det oppsto en feil ved betaling")
    } finally {
      setLaster(false)
    }
  }

  return (
    <div className="content-box">
      <h2>Kjøp tilgang til kurs</h2>
      <select value={valgt} onChange={(e) => setValgt(e.target.value)}>
        <option value="">Velg et kurs</option>
        {kursvalg.map(kurs => (
          <option key={kurs.id} value={kurs.id}>
            {kurs.tittel} – {kurs.pris} kr
          </option>
        ))}
      </select>

      <button
        onClick={handleBetaling}
        className="btn"
        disabled={!valgt || laster}
      >
        {laster ? "Sender til Stripe..." : "Betal og start"}
      </button>
    </div>
  )
}
