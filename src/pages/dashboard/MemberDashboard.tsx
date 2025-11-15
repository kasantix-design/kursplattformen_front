import { Link } from "react-router-dom"

export default function MemberDashboard() {
  return (
    <div className="content-box">
      <h2>Medlemsside</h2>
      <p>Velkommen som medlem! Her finner du dine ressurser:</p>
      <ul>
        <li><Link to="/undervisning">Delta i live undervisning</Link></li>
        <li><Link to="/opptak">Se opptak</Link></li>
        <li><Link to="/kurs">Mine kurs</Link></li>
        <li><Link to="/notater">Mine notater</Link></li>
        <li><Link to="/profil">Min profil</Link></li>
      </ul>
    </div>
  )
}
