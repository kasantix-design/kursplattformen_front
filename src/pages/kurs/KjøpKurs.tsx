import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type Kurs = {
  id: string
  tittel: string
  beskrivelse: string
  pris: number
}

export default function KjøpKurs() {
  const { kursId } = useParams()
  const [kurs, setKurs] = useState<Kurs | null>(null)

  useEffect(() => {
    setKurs({
      id: kursId || "1",
      tittel: "Mindfulness for nybegynnere",
      beskrivelse: "Lær å håndtere stress med praktiske teknikker over 4 uker.",
      pris: 499,
    })
  }, [kursId])

  const handleStripe = async () => {
    const res = await fetch(`${API_URL}/api/betaling/stripe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ kursId: kurs?.id }),
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      alert("Klarte ikke å starte Stripe-betaling")
    }
  }

  const handleVipps = async () => {
    alert("Vipps-integrasjon kommer")
  }

  if (!kurs) return <p>Laster kursinfo...</p>

  return (
    <div className="content-area">
      <div className="content-box">
        <h2>{kurs.tittel}</h2>
        <p>{kurs.beskrivelse}</p>
        <p><strong>Pris: {kurs.pris} NOK</strong></p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn" onClick={handleStripe}>Kjøp med Stripe</button>
          <button className="btn" onClick={handleVipps}>Kjøp med Vipps</button>
        </div>
      </div>
    </div>
  )
}
