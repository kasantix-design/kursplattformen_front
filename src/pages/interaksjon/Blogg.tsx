const dummyInnlegg = [
  { id: 1, tittel: "Velkommen til plattformen", innhold: "Dette er et innlegg fra admin." },
  { id: 2, tittel: "Nytt kurs lansert", innhold: "Vi har lagt til nytt kurs om fokus." }
]

export default function Blogg() {
  return (
    <div className="content-box">
      <h2>Blogg / Kunngjøringer</h2>
      {dummyInnlegg.map(innlegg => (
        <div key={innlegg.id} style={{ marginBottom: "2rem" }}>
          <h3>{innlegg.tittel}</h3>
          <p>{innlegg.innhold}</p>
        </div>
      ))}
    </div>
  )
}
