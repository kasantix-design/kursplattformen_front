import { useEffect } from "react"

type Props = {
  message: string
  onClose: () => void
}

export default function Notification({ message, onClose }: Props) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#A8C3A0",
        color: "#2E2E2E",
        padding: "1rem 1.5rem",
        borderRadius: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {message}
    </div>
  )
}
