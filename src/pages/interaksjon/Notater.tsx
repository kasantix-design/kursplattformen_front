import { useState, useEffect } from "react"

export default function Notater() {
  const [tekst, setTekst] = useState("")

  useEffect(() => {
    const lagret = localStorage.getItem("notater")
    if (lagret) setTekst(lagret)
  }, [])

  useEffect(() => {
    localStorage.setItem("notater", tekst)
  }, [tekst])

  return (
    <div className="content-area">
      <div className="content-box">
        <h2>Dine notater</h2>
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
