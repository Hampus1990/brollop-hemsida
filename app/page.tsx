export default function Page() {
  return (
    <main>
      <section
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: "url('/malsaker.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "64px", margin: 0 }}>
            Hampus & Kelsi
          </h1>

          <p style={{ fontSize: "20px", marginTop: "16px" }}>
            22 augusti 2026 · Mälsåkers Slott
          </p>

          <p style={{ fontSize: "16px", marginTop: "24px", opacity: 0.9 }}>
            Välkommen att fira med oss
          </p>
        </div>
      </section>
    </main>
  );
}
