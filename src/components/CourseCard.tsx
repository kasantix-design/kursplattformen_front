import { Link } from 'react-router-dom'

export default function CourseCard({ title, id }: { title: string, id: string }) {
  return (
    <div className="content-box">
      <h2>{title}</h2>
      <Link to={`/kurs/${id}`} className="btn">Gå til kurs</Link>
    </div>
  )
}
