// src/pages/undervisning/Videomote.tsx
export default function Videomote() {
  return (
    <div className="content-area">
      <h2>Startet møte – Jitsi</h2>
      <p>Du er nå i et videomøte. Del lenken for å invitere andre.</p>

      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://meet.jit.si/InKasaLiveRom"
          allow="camera; microphone; fullscreen; display-capture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          title="Videomøte"
        />
      </div>
    </div>
  );
}
