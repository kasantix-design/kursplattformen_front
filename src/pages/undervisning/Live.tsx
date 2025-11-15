import { useEffect } from "react"

export default function Live() {
  useEffect(() => {
    const domain = "meet.jit.si"
    const options = {
      roomName: "KursplattformDemoRom",
      width: "100%",
      height: 600,
      parentNode: document.getElementById("jitsi-container"),
      userInfo: {
        displayName: "Deltaker",
      },
    }
    // @ts-ignore
    new window.JitsiMeetExternalAPI(domain, options)
  }, [])

  return (
    <div className="content-area">
      <h2>Live undervisning</h2>
      <div id="jitsi-container" style={{ width: "100%", height: 600 }} />
    </div>
  )
}
