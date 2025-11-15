const dummyOpptak = [
  { id: "v1", tittel: "Modul 1 – Introduksjon", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "v2", tittel: "Modul 2 – Fokus", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
]

export default function Opptak() {
  return (
    <div className="content-box">
      <h2>Videoopptak</h2>
      {dummyOpptak.map(video => (
        <div key={video.id} style={{ marginBottom: "2rem" }}>
          <h4>{video.tittel}</h4>
          <iframe width="100%" height="360" src={video.url} allowFullScreen />
        </div>
      ))}
    </div>
  )
}
