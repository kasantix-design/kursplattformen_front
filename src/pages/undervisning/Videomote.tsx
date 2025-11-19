import { useEffect } from "react";

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

export default function Videomote() {
  useEffect(() => {
    const domain = "8x8.vc";
    const roomName = "kursplattformen-fast-rom";

    const loadJitsi = () => {
      if (window.JitsiMeetExternalAPI) {
        const options = {
          roomName,
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
        new window.JitsiMeetExternalAPI(domain, options);
      }
    };

    // Dynamisk last script hvis det ikke finnes
    if (!window.JitsiMeetExternalAPI) {
      const script = document.createElement("script");
      script.src = "https://8x8.vc/vpaas-magic-cookie-515a9e2c706c441b806d7de6424c4fb7/external_api.js";
      script.async = true;
      script.onload = loadJitsi;
      script.onerror = () => {
        console.error("🚨 Klarte ikke å laste Jitsi-script.");
      };
      document.body.appendChild(script);
    } else {
      loadJitsi();
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
