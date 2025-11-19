import { useEffect } from "react";

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

export default function Videomote() {
  useEffect(() => {
    const domain = "8x8.vc";
    const roomName = "kursplattformen-fast-rom"; // Du kan bytte til dynamisk navn
    const options = {
      roomName: roomName,
      parentNode: document.getElementById("jaas-container"),
      width: "100%",
      height: 600,
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: false,
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
      },
    };

    if (window.JitsiMeetExternalAPI) {
      new window.JitsiMeetExternalAPI(domain, options);
    } else {
      alert("JitsiMeet API kunne ikke lastes. Prøv igjen senere.");
    }
  }, []);

  return (
    <div className="content-area">
      <h1>Videomøte – Adminrom</h1>
      <p>Del lenken med deltakere: <strong>https://kursplattformen.netlify.app/videomote</strong></p>
      <div id="jaas-container" style={{ marginTop: "1rem", height: "600px" }}></div>
    </div>
  );
}
