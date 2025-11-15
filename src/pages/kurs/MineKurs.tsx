const mineKurs = [
  { id: "abc", tittel: "Mindfulness", fremdrift: "2/4 moduler" },
]

export default function MineKurs() {
  return (
    <div className="content-area">
      <h2>Mine kjøpte kurs</h2>
      <div className="book-grid">
        {mineKurs.map((kurs) => (
          <div className="book-item" key={kurs.id}>
            <h3>{kurs.tittel}</h3>
            <p>Fremdrift: {kurs.fremdrift}</p>
            <a className="btn" href={`/kurs/${kurs.id}`}>
              Gå til kurs
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
