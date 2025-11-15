import { useState } from "react"

const kursvalg = [
  { id: "1", tittel: "Grunnkurs", pris: 499 },
  { id: "2", tittel: "Fordypning", pris: 899 },
]

export default function KjøpKurs() {
  const [valgt, setValgt] = useState("")

  const handleBetaling = () => {
    alert(`Starter betaling for kurs ID: ${valgt}`)
    // Her kan du redirecte til Stripe Checkout eller Vipps-link
    // f.eks. window.location.href = "https://betalingslink"
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
      <button onClick={handleBetaling} className="btn" disabled={!valgt}>
        Betal og start
      </button>
    </div>
  )
}
