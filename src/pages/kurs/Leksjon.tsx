import { useParams } from "react-router-dom"

export default function Leksjon() {
  const { id, leksjonId } = useParams()

  return (
    <div className="content-box">
      <h2>Leksjon {leksjonId} i kurs {id}</h2>
      <p>Her kan du vise video, tekst eller interaktivt innhold.</p>
    </div>
  )
}
