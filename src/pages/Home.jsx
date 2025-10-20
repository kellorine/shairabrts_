// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #ffd6eb, #ffe6f7)",
        color: "#ff66b2",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
        padding: "0 10px",
      }}
    >
      {/* 🌸 Floating emojis (gentle falling petals) */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {["🌸", "💖", "🌷", "💗", "🌺", "💞", "🌼", "💓"].map((emoji, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "-60px",
              left: `${10 + i * 12}%`,
              fontSize: "clamp(1rem, 2vw, 1.6rem)",
              opacity: 0.8,
              animation: `fallSmooth ${14 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}

        <style>
          {`
            /* 🌸 Soft floating fall with gentle side sway */
            @keyframes fallSmooth {
              0% {
                transform: translateY(-60px) translateX(0) rotate(0deg);
                opacity: 0;
              }
              15% {
                opacity: 1;
              }
              50% {
                transform: translateY(400px) translateX(30px) rotate(180deg);
              }
              85% {
                opacity: 1;
              }
              100% {
                transform: translateY(800px) translateX(-20px) rotate(360deg);
                opacity: 0;
              }
            }

            /* 💞 Soft entrance for text and button */
            @keyframes floatIn {
              0% { transform: translateY(-20px); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }

            /* 💖 Smooth heartbeat sparkle animation */
            @keyframes heartbeat {
              0%, 100% {
                transform: scale(1);
                box-shadow: 0 0 0px #fff, 0 0 0px #ffb6c1;
              }
              25% {
                transform: scale(1.05);
                box-shadow: 0 0 8px #fff, 0 0 15px #ffb6c1;
              }
              50% {
                transform: scale(0.98);
              }
              75% {
                transform: scale(1.04);
                box-shadow: 0 0 10px #fff, 0 0 20px #ffb6c1;
              }
            }
          `}
        </style>
      </div>

      {/* 🌷 Main content */}
      <div style={{ zIndex: 1, textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            marginBottom: "0.8rem",
            fontWeight: "600",
            animation: "floatIn 1.5s ease-out",
          }}
        >
          🌸 Our Love Board 💕
        </h1>

        <p
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
            marginBottom: "2rem",
            color: "#b30059",
            lineHeight: 1.5,
            animation: "floatIn 2.5s ease-out",
            animationDelay: "0.5s",
            animationFillMode: "both",
          }}
        >
          The good, the silly, and the things we’ll make better together 🌷
        </p>

        {/* 💖 Button with smooth heartbeat animation */}
        <div
          style={{
            display: "inline-block",
            animation:
              "floatIn 2s ease-out 1.2s both, heartbeat 2.5s ease-in-out infinite",
            borderRadius: "30px",
          }}
        >
          <Link
            to="/board"
            className="btn"
            style={{
              backgroundColor: "#ff80bf",
              color: "white",
              padding: "clamp(8px, 2vw, 12px) clamp(20px, 4vw, 30px)",
              borderRadius: "25px",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
              transition: "0.3s",
              display: "inline-block",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff66b2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff80bf")}
          >
            Go to Our Board 💖
          </Link>
        </div>
      </div>

      {/* 💕 Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "15px",
          fontSize: "clamp(0.7rem, 2.5vw, 0.95rem)",
          color: "#b30059",
          zIndex: 1,
        }}
      >
        Made with 💕 by Rej for my tulip Shaira 🌷
      </footer>
    </div>
  );
}
