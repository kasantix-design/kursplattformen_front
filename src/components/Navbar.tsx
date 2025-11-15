import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="btn">Kursplattform</Link>
      </div>
      <div>
        <Link to="/notater" className="btn">Notater</Link>
        <Link to="/undervisning" className="btn">Video</Link>
        <Link to="/opptak" className="btn">Opptak</Link>
        <Link to="/profil" className="btn">Profil</Link>
      </div>
    </nav>
  )
}
