import { Link } from "react-router-dom"

export default function AdminDashboard() {
  return (
    <div className="content-box">
      <h2>Adminpanel</h2>
      <p>Velkommen, administrator! Her kan du styre plattformen:</p>
      <ul>
        <li><Link to="/undervisning">Start undervisning (video)</Link></li>
        <li><Link to="/opptak">Se opptak</Link></li>
        <li><Link to="/kurs">Administrer kurs</Link></li>
        <li><Link to="/blogg">Publiser blogginnlegg</Link></li>
        <li><Link to="/notater">Les egne notater</Link></li>
        <li><Link to="/profil">Min profil</Link></li>
      </ul>
    </div>
  )
}
