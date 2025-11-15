import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside style={{ padding: "1rem" }}>
      <h3>Kurs</h3>
      <ul>
        <li><Link to="/kurs/intro">Intro</Link></li>
        <li><Link to="/kurs/modul1">Modul 1</Link></li>
        <li><Link to="/kurs/modul2">Modul 2</Link></li>
      </ul>
    </aside>
  )
}
