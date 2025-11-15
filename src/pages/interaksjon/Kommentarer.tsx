import { useState } from "react"

export default function Kommentarer() {
  const [tekst, setTekst] = useState("")
  const [kommentarer, setKommentarer] = useState<string[]>([])

  const leggTilKommentar = () => {
    setKommentarer([...kommentarer, tekst])
    setTekst("")
  }

  return (
    <div className="content-box">
      <h2>Kommentarer</h2>
      <textarea
        rows={4}
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <button onClick={leggTilKommentar} className="btn">Legg til kommentar</button>
      <ul>
        {kommentarer.map((c, i) => (
          <li key={i} style={{ marginTop: "0.8rem" }}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
