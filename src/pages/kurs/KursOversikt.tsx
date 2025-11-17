import { useEffect, useState } from "react"
import CourseCard from "../../components/CourseCard"

type Kurs = {
  id: string
  title: string
}

const API_URL = import.meta.env.VITE_API_URL

export default function KursOversikt() {
  const [kursListe, setKursListe] = useState<Kurs[]>([])
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentKurs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/kurs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        if (!res.ok) throw new Error("Kunne ikke hente kurs")
        const data = await res.json()
        setKursListe(data)
      } catch (err) {
        setFeil("Feil ved henting av kurs")
      }
    }

    hentKurs()
  }, [])

  return (
    <div className="content-box">
      <h2>Mine kurs</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}
      {kursListe.map(kurs => (
        <CourseCard key={kurs.id} id={kurs.id} title={kurs.title} />
      ))}
    </div>
  )
}
