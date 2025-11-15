import { useState } from "react"

type BlogPost = {
  title: string
  content: string
}

type BlogEditorProps = {
  onSubmit: (post: BlogPost) => void
  initialData?: BlogPost
}

export default function BlogEditor({ onSubmit, initialData }: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || "")
  const [content, setContent] = useState(initialData?.content || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) return alert("Fyll ut alle felt")
    onSubmit({ title, content })
    setTitle("")
    setContent("")
  }

  return (
    <div className="content-box">
      <h2>{initialData ? "Rediger innlegg" : "Nytt blogginnlegg"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Tittel</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Skriv tittel her"
        />

        <label>Innhold</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={10}
          placeholder="Skriv blogginnlegg her..."
        />

        <button className="form-btn-green" type="submit">
          {initialData ? "Oppdater" : "Publiser"}
        </button>
      </form>
    </div>
  )
}
