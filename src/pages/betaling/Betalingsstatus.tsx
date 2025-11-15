import { useLocation } from "react-router-dom"

export default function Betalingsstatus() {
  const query = new URLSearchParams(useLocation().search)
  const status = query.get("status")

  return (
    <div className="content-box">
      <h2>Betalingsstatus</h2>
      {status === "suksess" ? (
        <p>Takk for betalingen! Du har nå tilgang til kurset.</p>
      ) : (
        <p>Noe gikk galt med betalingen. Prøv igjen.</p>
      )}
    </div>
  )
}
