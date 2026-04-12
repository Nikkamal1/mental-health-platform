import React, { useState } from "react";
import ContactPage from "./ContactPage";
// import heroImage from "../assets/img-home/h1.jpeg";

function ComingSoonOverlay({ children, label = "Coming Soon", description = "ฟีเจอร์นี้กำลังจะมาเร็วๆ นี้" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {/* blurred content */}
      <div
        style={{
          filter: "blur(3px) grayscale(40%)",
          opacity: 0.5,
          pointerEvents: "none",
          userSelect: "none",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>

      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(8px, 2vw, 16px)",
          background: hovered ? "rgba(15,23,42,0.72)" : "rgba(15,23,42,0.55)",
          backdropFilter: "blur(2px)",
          transition: "background 0.3s",
          cursor: "not-allowed",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            color: "#fff",
            fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "clamp(4px,1vw,8px) clamp(12px,2vw,20px)",
            borderRadius: "999px",
            boxShadow: "0 4px 20px rgba(99,102,241,0.45)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {label}
        </span>

        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
            fontWeight: 400,
            textAlign: "center",
            maxWidth: "min(280px, 80vw)",
            lineHeight: 1.6,
            padding: "0 1rem",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.25s, transform 0.25s",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function MindHealthGame() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }}>
      <ComingSoonOverlay
        label="Coming Soon"
        description="กำลังพัฒนาอยู่ จะเปิดให้ใช้เร็วๆ นี้ค่ะ"
      >
        <section
          style={{
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px, 3vw, 24px)",
            padding: "clamp(1rem, 5vw, 3rem)",
            boxSizing: "border-box",
          }}
        >
          {/* ตรงนี้ใส่ heroImage ได้เลยตอน feature พร้อม */}
          {/* <img src={heroImage} alt="Hero Banner" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} /> */}

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.8rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "#14532d",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            🎮 Mind Health Game
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "clamp(0.95rem, 2.5vw, 1.3rem)",
              color: "#16a34a",
              textAlign: "center",
              maxWidth: "min(480px, 90vw)",
              lineHeight: 1.6,
            }}
          >
            เล่นเกมฝึกสมาธิพร้อมเพื่อน สนุกไปพร้อมกับดูแลสุขภาพจิต
          </p>

          <button
            style={{
              marginTop: "clamp(8px, 2vw, 16px)",
              padding: "clamp(10px,2vw,16px) clamp(24px,4vw,48px)",
              borderRadius: "999px",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            เริ่มเล่น
          </button>
        </section>
      </ComingSoonOverlay>
    </div>
    
  );
}

export default MindHealthGame;
export { ComingSoonOverlay };