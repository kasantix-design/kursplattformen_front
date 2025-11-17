import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type LiveVideo = {
  id: string
  tittel: string
  url: string
}

export default function Live() {
  const [sendinger, setSendinger] = useState<LiveVideo[]>([])
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentLive = async () => {
      try {
        const res = await fetch(`${API_URL}/api/video/live`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        if (!res.ok) throw new Error("Kunne ikke hente livesendinger")
        const data = await res.json()
        setSendinger(data)
      } catch (err) {
        setFeil("Feil ved henting av sendinger")
      }
    }

    hentLive()
  }, [])

  return (
    <div className="content-area">
      <h2>Direktesendinger</h2>
      {feil && <p style={{ color: "red" }}>{feil}</p>}

      {sendinger.length === 0 ? (
        <p>Ingen aktive sendinger</p>
      ) : (
        sendinger.map((video) => (
          <div key={video.id} className="content-box">
            <h3>{video.tittel}</h3>
            <a href={video.url} target="_blank" className="btn">Bli med</a>
          </div>
        ))
      )}
    </div>
  )
}
