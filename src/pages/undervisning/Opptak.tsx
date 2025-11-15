export default function Opptak() {
  const opptak = [
    {
      tittel: "Introkurs – Uke 1",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      tittel: "Mindfulness – Økt 2",
      url: "https://www.youtube.com/embed/5qap5aO4i9A",
    },
  ]

  return (
    <div className="content-area">
      <h2>Opptak fra tidligere undervisning</h2>
      <div className="book-grid">
        {opptak.map((video, i) => (
          <div key={i} className="book-item">
            <h3>{video.tittel}</h3>
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.tittel}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  )
}
