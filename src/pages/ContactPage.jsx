import React from "react";
import { Link } from "react-router-dom";

const regions = [
  {
    region: "ภาคเหนือ",
    icon: "🏔️",
    bg: "#EEF6FF",
    tagBg: "#4A90D9",
    agencies: [
      { name: "ศูนย์สุขภาพจิตที่ 1", address: "จ.เชียงใหม่", phone: "053-203-675" },
      { name: "ศูนย์สุขภาพจิตที่ 2", address: "จ.พิษณุโลก", phone: "055-906-361" },
      { name: "ศูนย์สุขภาพจิตที่ 3", address: "จ.นครสวรรค์", phone: "056-267-289" },
    ],
  },
  {
    region: "ภาคกลาง",
    icon: "🏙️",
    bg: "#F3F0FF",
    tagBg: "#7C5CDB",
    agencies: [
      { name: "ศูนย์สุขภาพจิตที่ 4", address: "จ.ปทุมธานี", phone: "02-147-0902" },
      { name: "ศูนย์สุขภาพจิตที่ 5", address: "จ.ราชบุรี", phone: "032-206-524" },
      { name: "ศูนย์สุขภาพจิตที่ 6", address: "จ.ชลบุรี", phone: "038-199-656" },
      { name: "ศูนย์สุขภาพจิตที่ 13", address: "กรุงเทพมหานคร", phone: "02-236-9445" },
    ],
  },
  {
    region: "ภาคตะวันออกเฉียงเหนือ",
    icon: "🌾",
    bg: "#FFFBEC",
    tagBg: "#D97B1A",
    agencies: [
      { name: "ศูนย์สุขภาพจิตที่ 7", address: "จ.ขอนแก่น", phone: "043-424-739" },
      { name: "ศูนย์สุขภาพจิตที่ 8", address: "จ.อุดรธานี", phone: "042-111-412" },
      { name: "ศูนย์สุขภาพจิตที่ 9", address: "จ.นครราชสีมา", phone: "044-256-729" },
      { name: "ศูนย์สุขภาพจิตที่ 10", address: "จ.อุบลราชธานี", phone: "045-352-500" },
    ],
  },
  {
    region: "ภาคใต้",
    icon: "🌊",
    bg: "#EDFAF6",
    tagBg: "#1A9E7A",
    agencies: [
      { name: "ศูนย์สุขภาพจิตที่ 11", address: "จ.สุราษฎร์ธานี", phone: "077-380-461" },
      { name: "ศูนย์สุขภาพจิตที่ 12", address: "จ.สงขลา", phone: "074-324-782" },
    ],
  },
];

function AgencyCard({ agency }) {
  return (
    <a
      href={`tel:${agency.phone.replace(/-/g, "")}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        borderRadius: "16px",
        padding: "16px 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        gap: "12px",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; }}
    >
      {/* ซ้าย */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1e293b", marginBottom: "4px", lineHeight: 1.3 }}>
          {agency.name}
        </div>
        <div style={{ fontSize: "0.875rem", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {agency.address}
        </div>
      </div>

      {/* เบอร์โทร — ใหญ่ กดง่าย */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "#f0fdf4",
        border: "1.5px solid #bbf7d0",
        borderRadius: "12px",
        padding: "10px 16px",
        flexShrink: 0,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span style={{ fontWeight: 800, fontSize: "1rem", color: "#15803d", letterSpacing: "0.03em" }}>
          {agency.phone}
        </span>
      </div>
    </a>
  );
}

function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui, sans-serif" }}>

      {/* Hero header */}
      <div style={{
        background: "linear-gradient(135deg, #5ab1cf 0%, #3d9ab8 100%)",
        padding: "clamp(2rem, 6vw, 3.5rem) clamp(1rem, 5vw, 2rem)",
        textAlign: "center",
      }}>
        <Link
          to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            color: "rgba(255,255,255,0.75)", fontSize: "0.875rem",
            textDecoration: "none", marginBottom: "1.25rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          กลับหน้าหลัก
        </Link>

        <div style={{ fontSize: "clamp(2rem, 6vw, 3rem)", marginBottom: "0.5rem" }}>🧠</div>
        <h1 style={{ color: "#fff", fontSize: "clamp(1.5rem, 5vw, 2.25rem)", fontWeight: 800, margin: "0 0 0.5rem" }}>
          ติดต่อขอความช่วยเหลือ
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", margin: 0 }}>
          ศูนย์สุขภาพจิต กรมสุขภาพจิต · กดเบอร์โทรได้เลย
        </p>

        {/* สายด่วน 1323 */}
        <a
          href="tel:1323"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginTop: "1.5rem",
            background: "#fff",
            color: "#d97706",
            borderRadius: "999px",
            padding: "14px 32px",
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
            letterSpacing: "0.08em",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          สายด่วน 1323 · 24 ชม.
        </a>
      </div>

      {/* Cards 4 ภาค */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
        gap: "clamp(1rem, 3vw, 1.75rem)",
      }}>
        {regions.map((r) => (
          <div
            key={r.region}
            style={{
              background: r.bg,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            {/* Region header */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "16px 20px 12px",
            }}>
              <span style={{ fontSize: "1.6rem" }}>{r.icon}</span>
              <span style={{
                background: r.tagBg,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.875rem",
                padding: "4px 14px",
                borderRadius: "999px",
              }}>
                {r.region}
              </span>
            </div>

            {/* Agency list */}
            <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {r.agencies.map((agency, i) => (
                <AgencyCard key={i} agency={agency} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* footer note */}
      {/* <div style={{
        background: "#1e3a4a",
        color: "rgba(255,255,255,0.5)",
        textAlign: "center",
        fontSize: "0.8rem",
        padding: "1rem",
      }}>
        © {new Date().getFullYear()} Mental Health Support · กรมสุขภาพจิต กระทรวงสาธารณสุข
      </div> */}
    </div>
  );
}

export default ContactPage;