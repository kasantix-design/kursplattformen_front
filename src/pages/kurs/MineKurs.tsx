import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type Kurs = {
  id: string
  tittel: string
  fremdrift: string
}

export default function MineKurs() {
  const [mineKurs, setMineKurs] = useState<Kurs[]>([])
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentMineKurs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/medlem/minekurs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        if (!res.ok) throw new Error("Klarte ikke hente kjøpte kurs")
        const data = await res.json()
        setMineKurs(data)
      } catch (err) {
        setFeil("Feil ved henting av kurs")
      }
    }

    hentMineKurs()
  }, [])

  return (
    <div className="content-area">
      <h2>Mine kjøpte kurs</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}

      <div className="book-grid">
        {mineKurs.map((kurs) => (
          <div className="book-item" key={kurs.id}>
            <h3>{kurs.tittel}</h3>
            <p>Fremdrift: {kurs.fremdrift}</p>
            <a className="btn" href={`/kurs/${kurs.id}`}>
              Gå til kurs
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
