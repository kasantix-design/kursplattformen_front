import { useEffect, useRef } from "react"

declare global {
  interface Window {
    JitsiMeetExternalAPI: any
  }
}

export default function Live() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI || !containerRef.current) return

    const domain = "meet.jit.si"
    const options = {
      roomName: "KursPlattformDemoRom",
      parentNode: containerRef.current,
      configOverwrite: {},
      interfaceConfigOverwrite: {},
    }

    new window.JitsiMeetExternalAPI(domain, options)
  }, [])

  return (
    <div className="content-box">
      <h2>Live undervisning</h2>
      <div ref={containerRef} style={{ height: "600px" }} />
    </div>
  )
}
