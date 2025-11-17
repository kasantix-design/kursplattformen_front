import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type Video = {
  id: string
  tittel: string
  url: string
}

export default function Opptak() {
  const [opptak, setOpptak] = useState<Video[]>([])
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentOpptak = async () => {
      try {
        const res = await fetch(`${API_URL}/api/video/opptak`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        if (!res.ok) throw new Error("Kunne ikke hente opptak")
        const data = await res.json()
        setOpptak(data)
      } catch (err) {
        setFeil("Feil ved henting av videoer")
      }
    }

    hentOpptak()
  }, [])

  return (
    <div className="content-area">
      <h2>Opptak fra tidligere undervisning</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}

      <div className="book-grid">
        {opptak.map((video) => (
          <div key={video.id} className="book-item">
            <h3>{video.tittel}</h3>
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.tittel}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  )
}
