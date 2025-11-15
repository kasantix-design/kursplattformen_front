import { useState } from "react"

export default function Notater() {
  const [notat, setNotat] = useState("")

  const lagreNotat = () => {
    localStorage.setItem("mineNotater", notat)
    alert("Notat lagret!")
  }

  return (
    <div className="content-box">
      <h2>Mine notater</h2>
      <textarea
        rows={12}
        value={notat}
        onChange={(e) => setNotat(e.target.value)}
        style={{ width: "100%", padding: "1rem", borderRadius: "10px" }}
      />
      <button onClick={lagreNotat} className="btn">Lagre notat</button>
    </div>
  )
}
