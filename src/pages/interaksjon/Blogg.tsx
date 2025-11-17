import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type Innlegg = {
  id: number
  tittel: string
  innhold: string
}

export default function Blogg() {
  const [innlegg, setInnlegg] = useState<Innlegg[]>([])
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentBlogg = async () => {
      try {
        const res = await fetch(`${API_URL}/api/blogg`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        if (!res.ok) throw new Error("Kunne ikke hente blogginnlegg")
        const data = await res.json()
        setInnlegg(data)
      } catch (err) {
        setFeil("Feil ved henting av blogg")
      }
    }

    hentBlogg()
  }, [])

  return (
    <div className="content-box">
      <h2>Blogg / Kunngjøringer</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}

      {innlegg.map((post) => (
        <div key={post.id} style={{ marginBottom: "2rem" }}>
          <h3>{post.tittel}</h3>
          <p>{post.innhold}</p>
        </div>
      ))}
    </div>
  )
}
