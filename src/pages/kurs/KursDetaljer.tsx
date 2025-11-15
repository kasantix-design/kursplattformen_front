import { useParams, Link } from "react-router-dom"

const dummyModuler = [
  { id: "m1", tittel: "Introduksjon" },
  { id: "m2", tittel: "Selvrefleksjon" },
]

export default function KursDetaljer() {
  const { id } = useParams()

  return (
    <div className="content-box">
      <h2>Kursdetaljer for kurs ID: {id}</h2>
      <ul>
        {dummyModuler.map(modul => (
          <li key={modul.id}>
            <Link to={`/kurs/${id}/leksjon/${modul.id}`}>{modul.tittel}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
