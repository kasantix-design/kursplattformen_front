import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

export default function Notater() {
  const [tekst, setTekst] = useState("")
  const [feil, setFeil] = useState("")

  useEffect(() => {
    const hentNotat = async () => {
      try {
        const res = await fetch(`${API_URL}/api/notater`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        if (!res.ok) throw new Error("Kunne ikke hente notat")
        const data = await res.json()
        setTekst(data.tekst || "")
      } catch (err) {
        setFeil("Feil ved henting av notat")
      }
    }

    hentNotat()
  }, [])

  useEffect(() => {
    const lagre = setTimeout(() => {
      fetch(`${API_URL}/api/notater`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ tekst }),
      }).catch(() => {
        setFeil("Kunne ikke lagre notat")
      })
    }, 1000)

    return () => clearTimeout(lagre)
  }, [tekst])

  return (
    <div className="content-area">
      <div className="content-box">
        <h2>Dine notater</h2>
        {feil && <p style={{ color: "red" }}>{feil}</p>}

        <textarea
          rows={15}
          style={{ width: "100%", padding: "1rem" }}
          placeholder="Skriv ned tanker, refleksjoner eller ideer..."
          value={tekst}
          onChange={(e) => setTekst(e.target.value)}
        />
      </div>
    </div>
  )
}
