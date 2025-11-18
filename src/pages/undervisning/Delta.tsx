// src/pages/undervisning/Delta.tsx
export default function Delta() {
  return (
    <div className="content-area">
      <h2>Delta i møte</h2>
      <p>Du deltar i pågående møte med veileder.</p>

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
