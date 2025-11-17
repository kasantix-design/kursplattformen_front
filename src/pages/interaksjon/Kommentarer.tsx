import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

export default function Kommentarer() {
  const [tekst, setTekst] = useState("")
  const [kommentarer, setKommentarer] = useState<string[]>([])
  const [feil, setFeil] = useState("")

  const hentKommentarer = async () => {
    try {
      const res = await fetch(`${API_URL}/api/kommentarer`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (!res.ok) throw new Error("Feil ved henting")
      const data = await res.json()
      setKommentarer(data)
    } catch (err) {
      setFeil("Kunne ikke hente kommentarer")
    }
  }

  const leggTilKommentar = async () => {
    try {
      const res = await fetch(`${API_URL}/api/kommentarer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ tekst }),
      })
      if (!res.ok) throw new Error("Kunne ikke lagre kommentar")
      setTekst("")
      hentKommentarer()
    } catch (err) {
      setFeil("Feil ved lagring")
    }
  }

  useEffect(() => {
    hentKommentarer()
  }, [])

  return (
    <div className="content-box">
      <h2>Kommentarer</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}

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
