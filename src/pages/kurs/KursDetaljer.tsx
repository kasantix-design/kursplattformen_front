import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type Modul = {
  id: string
  tittel: string
}

export default function KursDetaljer() {
  const { id } = useParams()
  const [moduler, setModuler] = useState<Modul[]>([])
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentModuler = async () => {
      try {
        const res = await fetch(`${API_URL}/api/kurs/${id}/moduler`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        if (!res.ok) throw new Error("Kunne ikke hente moduler")
        const data = await res.json()
        setModuler(data)
      } catch (err) {
        setFeil("Feil ved henting av moduler")
      }
    }

    if (id) {
      hentModuler()
    }
  }, [id])

  return (
    <div className="content-box">
      <h2>Kursdetaljer for kurs ID: {id}</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}
      <ul>
        {moduler.map(modul => (
          <li key={modul.id}>
            <Link to={`/kurs/${id}/leksjon/${modul.id}`}>{modul.tittel}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
