import React, { useState } from "react";

const dearMeCards = [
  "ถ้ามีเวลาว่างให้กับตัวเอง\nคุณจะอยากใช้เวลานั้นทำอะไร",
  "นิยามคำว่า \"ความสุข\"\nของคุณคืออะไร",
  "เมื่อเทียบกับเมื่อวานแล้ว\nวันนี้คุณเห็นตัวเอง\nเปลี่ยนไปอย่างไร",
  "มีเรื่องใดบ้าง\nที่คุณยังโกรธตัวเองอยู่\nและมีเรื่องใดบ้าง\nที่คุณอยากให้อภัยตัวเอง",
  "สิ่งที่คุณอยากขอบคุณ\nตัวเองคืออะไร",
  "อะไรที่ให้คุณรู้สึกมีคุณค่า",
  "สิ่งเล็กๆที่ทำให้คุณยิ้ม\nในวันนี้คืออะไร",
  "สิ่งที่ทำให้คุณรู้สึก\n\"เป็นตัวเอง\"\nคืออะไร",
  "ในช่วงนี้คุณรู้สึกเหนื่อย\nกับเรื่องอะไรที่สุด",
  "ใคร หรืออะไร\nที่สามารถให้กำลังใจคุณได้",
  "คำชมที่อยากได้ยินที่สุด\nตอนนี้คืออะไร",
  "คุณเคยเปรียบเทียบตัวเอง\nกับคนรอบข้างบ้างไหม\nและรู้สึกอย่างไรกับสิ่งนั้น",
  "ตอนนี้ชีวิตคุณต้องการ\nอะไรมากที่สุด",
  "ในตอนนี้ มีความจริงหรือ\nความเจ็บปวดใดบ้าง\nที่คุณรับรู้ว่ายังอยู่ในใจ\nแต่ยังไม่ได้หยิบมาดูอย่างจริงจัง",
];

const dearYouCards = [
  "ไม่ว่าคุณจะเลือกใช้เวลานั้น\nเพื่ออะไร เวลานั้นเป็นของคุณ\nใช้ในแบบที่คุณต้องการนะ",
  "ความสุขของคุณ\nไม่จำเป็นต้องเหมือนใคร\nอย่าลืมหาความสุข\nให้ตัวเองในทุกๆวัน ;)",
  "ไม่ว่าจะเกิดอะไรขึ้น\nเราวันนี้ได้เรียนรู้\nและเก่งขึ้นกว่า\nเมื่อวานนะ",
  "การให้อภัยตัวเอง\nอาจเป็นก้าวเล็กๆ\nที่คุณเริ่มได้วันนี้",
  "ขอบคุณตัวเอง\nที่ยังอยู่ตรงนี้\nยังพยายาม ยังไม่ยอมแพ้",
  "คุณมีคุณค่า\nโดยไม่จำเป็นต้อง\nพิสูจน์อะไร",
  "ความสุข\nไม่จำเป็นต้องยิ่งใหญ่\nแค่ทำให้คุณยิ้มได้\nก็พอแล้ว",
  "ทุกอย่างที่เป็นตัวตนของเรา\nไม่ว่าสิ่งนั้นจะเป็นอะไร\nอยากให้ภูมิใจในตัวเองเข้าไว้",
  "คุณอาจจะกำลังแบกอะไร\nไว้มากกว่าที่เห็น\nอย่าลืมหาเวลาให้ตัวเอง\nพักบ้างนะ\nResting is also\npart of the process",
  "คุณก็อย่าลืม\nให้กำลังใจ\nตัวคุณเองด้วยนะ",
  "ลองพูดคำนั้นกับตัวเอง\nแล้วยิ้มกว้างๆ ซัก 1 ที\nเพราะเรารู้คุณค่าในตัวเอง\nดีที่สุดแล้ว",
  "การเติบโตไม่ใช่การแข่งขัน\nการที่คุณไม่หยุดเดิน\nนั่นก็มีค่ามากแล้ว",
  "ตั้งเป้าหมาย\nแล้วไปให้ถึงนะ :)",
  "บางความรู้สึกไม่จำเป็น\nต้องมีคำตอบทันที\nแค่รับรู้ว่ายังมีสิ่งนั้น\nอยู่ในใจก็เก่งมากพอแล้ว",
];

function DaisyCorner({ style }) {
  return (
    <svg viewBox="0 0 130 130" style={{ position: "absolute", width: 100, height: 100, pointerEvents: "none", ...style }}>
      <path d="M10,120 Q50,70 100,15" stroke="#6a9967" strokeWidth="2" fill="none" opacity="0.6"/>
      <ellipse cx="32" cy="90" rx="16" ry="7" fill="#4a7c59" opacity="0.65" transform="rotate(-40,32,90)"/>
      <ellipse cx="60" cy="55" rx="14" ry="6" fill="#6a9967" opacity="0.55" transform="rotate(15,60,55)"/>
      <ellipse cx="85" cy="30" rx="12" ry="5" fill="#4a7c59" opacity="0.5" transform="rotate(-20,85,30)"/>
      <line x1="45" y1="75" x2="55" y2="60" stroke="#dc2626" strokeWidth="1.2" opacity="0.5"/>
      <line x1="70" y1="45" x2="80" y2="32" stroke="#dc2626" strokeWidth="1.2" opacity="0.5"/>
      <g transform="translate(95,22)">
        {[0,36,72,108,144,180,216,252,288,324].map((a,i) => (
          <ellipse key={i} cx={Math.cos(a*Math.PI/180)*14} cy={Math.sin(a*Math.PI/180)*14}
            rx="10" ry="5" fill="#fcd34d" opacity="0.95"
            transform={`rotate(${a},${Math.cos(a*Math.PI/180)*14},${Math.sin(a*Math.PI/180)*14})`}/>
        ))}
        <circle cx="0" cy="0" r="7" fill="#dc2626" opacity="0.9"/>
      </g>
      <g transform="translate(55,65)">
        {[0,36,72,108,144,180,216,252,288,324].map((a,i) => (
          <ellipse key={i} cx={Math.cos(a*Math.PI/180)*10} cy={Math.sin(a*Math.PI/180)*10}
            rx="7" ry="4" fill="#fde68a" opacity="0.9"
            transform={`rotate(${a},${Math.cos(a*Math.PI/180)*10},${Math.sin(a*Math.PI/180)*10})`}/>
        ))}
        <circle cx="0" cy="0" r="5.5" fill="#b91c1c" opacity="0.85"/>
      </g>
      {[[45,78],[72,47]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="3" fill="#dc2626" opacity="0.6"/>
      ))}
    </svg>
  );
}

function FlowerCornerYellow({ style }) {
  return (
    <svg viewBox="0 0 130 130" style={{ position: "absolute", width: 100, height: 100, pointerEvents: "none", ...style }}>
      <path d="M10,120 Q55,65 105,10" stroke="#a8c5a0" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <ellipse cx="30" cy="92" rx="16" ry="7" fill="#4a7c59" opacity="0.6" transform="rotate(-38,30,92)"/>
      <ellipse cx="62" cy="57" rx="14" ry="6" fill="#6a9967" opacity="0.55" transform="rotate(12,62,57)"/>
      <ellipse cx="88" cy="30" rx="12" ry="5" fill="#4a7c59" opacity="0.5" transform="rotate(-18,88,30)"/>
      <g transform="translate(92,22)">
        {[0,60,120,180,240,300].map((a,i)=>(
          <ellipse key={i} cx={Math.cos(a*Math.PI/180)*17} cy={Math.sin(a*Math.PI/180)*17}
            rx="13" ry="8" fill={i%2===0?"#f5c842":"#f5a623"} opacity="0.95"
            transform={`rotate(${a},${Math.cos(a*Math.PI/180)*17},${Math.sin(a*Math.PI/180)*17})`}/>
        ))}
        <circle cx="0" cy="0" r="9" fill="#5a3200" opacity="0.9"/>
      </g>
      <g transform="translate(50,68)">
        {[0,72,144,216,288].map((a,i)=>(
          <ellipse key={i} cx={Math.cos(a*Math.PI/180)*12} cy={Math.sin(a*Math.PI/180)*12}
            rx="9" ry="6" fill="#f9a8d4" opacity="0.9"
            transform={`rotate(${a},${Math.cos(a*Math.PI/180)*12},${Math.sin(a*Math.PI/180)*12})`}/>
        ))}
        <circle cx="0" cy="0" r="6" fill="#5a3200" opacity="0.85"/>
      </g>
      <g transform="translate(85,55)">
        {[0,72,144,216,288].map((a,i)=>(
          <ellipse key={i} cx={Math.cos(a*Math.PI/180)*9} cy={Math.sin(a*Math.PI/180)*9}
            rx="7" ry="4" fill="#fcd34d" opacity="0.9"
            transform={`rotate(${a},${Math.cos(a*Math.PI/180)*9},${Math.sin(a*Math.PI/180)*9})`}/>
        ))}
        <circle cx="0" cy="0" r="5" fill="#5a3200" opacity="0.8"/>
      </g>
      {[[22,85],[38,100]].map(([cx,cy],i)=>(
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0,72,144,216,288].map((a,j)=>(
            <ellipse key={j} cx={Math.cos(a*Math.PI/180)*4} cy={Math.sin(a*Math.PI/180)*4}
              rx="3" ry="2" fill={["#c4b5fd","#93c5fd","#c4b5fd"][j%3]}
              transform={`rotate(${a},${Math.cos(a*Math.PI/180)*4},${Math.sin(a*Math.PI/180)*4})`}/>
          ))}
          <circle cx="0" cy="0" r="2" fill="#fbbf24"/>
        </g>
      ))}
    </svg>
  );
}

function FlipCard({ index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        onClick={() => setFlipped(f => !f)}
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "133%",
          perspective: "1000px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}>
          {/* ── หน้า: Dear Me ── */}
          <div style={{
            position: "absolute", inset: 0, backfaceVisibility: "hidden",
            background: "linear-gradient(145deg, #fdf8ed, #fef6e4)",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(180,150,60,0.15), 0 1px 4px rgba(0,0,0,0.06)",
            border: "1.5px solid #f0dea0",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}>
            <DaisyCorner style={{ top: -4, right: -4 }} />
            <DaisyCorner style={{ bottom: -4, left: -4, transform: "rotate(180deg)" }} />
            <div style={{ padding: "14px 16px 2px", position: "relative", zIndex: 1 }}>
              <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: "clamp(0.9rem,2.5vw,1.2rem)", color: "#7b3f2e", fontWeight: 700 }}>
                Dear me
              </span>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 16px 14px", position: "relative", zIndex: 1 }}>
              <p style={{
                margin: 0, textAlign: "center",
                fontFamily: "'Sarabun',sans-serif",
                fontSize: "clamp(0.75rem,1.8vw,0.92rem)",
                color: "#4a2c0a", fontWeight: 600, lineHeight: 1.8,
                whiteSpace: "pre-line",
              }}>{dearMeCards[index]}</p>
            </div>
            <div style={{ textAlign: "center", paddingBottom: "8px", fontSize: "0.6rem", color: "#b45309", opacity: 0.5, zIndex: 1, position: "relative" }}>
              แตะเพื่อพลิก ↺
            </div>
          </div>
          {/* ── หลัง: Dear You ── */}
          <div style={{
            position: "absolute", inset: 0, backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(145deg, #fffde7, #fff8e1, #fef3c7)",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(245,200,66,0.18), 0 1px 4px rgba(0,0,0,0.06)",
            border: "1.5px solid #fde68a",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}>
            <FlowerCornerYellow style={{ top: -4, right: -4 }} />
            <FlowerCornerYellow style={{ bottom: -4, left: -4, transform: "rotate(180deg)" }} />
            <div style={{ padding: "14px 16px 2px", position: "relative", zIndex: 1 }}>
              <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: "clamp(0.9rem,2.5vw,1.2rem)", color: "#7b3f2e", fontWeight: 700 }}>
                Dear you
              </span>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 14px 14px", position: "relative", zIndex: 1 }}>
              <div style={{
                background: "rgba(255,248,210,0.75)",
                borderRadius: "50% 50% 50% 50% / 38% 38% 62% 62%",
                padding: "16px 14px", width: "100%",
              }}>
                <p style={{
                  margin: 0, textAlign: "center",
                  fontFamily: "'Sarabun',sans-serif",
                  fontSize: "clamp(0.75rem,1.8vw,0.92rem)",
                  color: "#4a2c0a", fontWeight: 600, lineHeight: 1.8,
                  whiteSpace: "pre-line",
                }}>{dearYouCards[index]}</p>
              </div>
            </div>
            <div style={{ textAlign: "center", paddingBottom: "8px", fontSize: "0.6rem", color: "#b45309", opacity: 0.5, zIndex: 1, position: "relative" }}>
              แตะเพื่อพลิกกลับ ↺
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowToPlay() {
  const [open, setOpen] = useState(false);
  const steps = [
    // { icon: "🎴", text: "สุ่มการ์ด 1 ใบ" },
    // { icon: "📅", text: "เล่นต่อเนื่องเป็นเวลา 30 วัน" },
    { icon: "💭", text: "ด้านหน้าการ์ดคือ \"DEAR ME\" เป็นคำถามให้คุณได้เข้าใจตัวเอง" },
    { icon: "💌", text: "ด้านหลังการ์ดคือ \"DEAR YOU\" เป็นข้อความดีๆ จากพวกเรา" },
  ];
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "12px clamp(1rem,3vw,1.5rem) 0" }}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #fdf8ed, #fef6e4)",
          border: "1.5px solid #f0dea0",
          borderRadius: open ? "16px 16px 0 0" : "16px",
          padding: "12px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'Sarabun',sans-serif",
          transition: "border-radius 0.3s",
        }}
      >
        <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: "clamp(0.95rem,2.5vw,1.15rem)", color: "#7b3f2e", fontWeight: 700 }}>
          ✨ วิธีการเล่น
        </span>
        <span style={{
          fontSize: "0.75rem", color: "#b45309",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s",
          display: "inline-block",
        }}>▼</span>
      </button>

      {/* Expandable Content */}
      {open && (
        <div style={{
          background: "linear-gradient(145deg, #fdf8ed, #fef6e4)",
          border: "1.5px solid #f0dea0",
          borderTop: "none",
          borderRadius: "0 0 16px 16px",
          padding: "0 20px 16px",
        }}>
          {/* Divider */}
          <div style={{ borderTop: "1px dashed #e8d5a0", marginBottom: "14px" }} />

          {/* คำแนะนำ */}
          {/* <p style={{
            fontFamily: "'Sarabun',sans-serif",
            fontSize: "clamp(0.78rem,2vw,0.88rem)",
            color: "#6b4423",
            lineHeight: 1.9,
            margin: "0 0 14px",
            textAlign: "center",
          }}>
            เพื่อการเล่นอย่างมีประสิทธิภาพ พวกเราขอแนะนำให้เล่นตอนก่อนนอน
            หรืออาจเลือกมุมเงียบๆ นั่งลงอย่างสบายใจ ยามที่คุณพร้อมจะให้เวลากับตัวเองสัก 5 นาที
            พวกเราขอแนะนำให้คุณหยิบสมุดขึ้นมาหนึ่งเล่ม หาปากกาสักแท่ง
            และจดคำตอบของคุณเองในแต่ละวัน เก็บไว้เป็นของขวัญของใจให้คุณใน 30 วันข้างหน้านี้
            การ์ดชุดนี้สามารถหยิบกลับมาเล่นซ้ำได้เสมอ ในวันที่คุณอยากกลับมาสำรวจตัวเอง
          </p> */}

          {/* Divider */}
          <div style={{ borderTop: "1px dashed #e8d5a0", marginBottom: "14px" }} />

          {/* HOW TO PLAY label */}
          {/* <p style={{
            fontFamily: "'Dancing Script',cursive",
            fontSize: "clamp(1rem,3vw,1.15rem)",
            color: "#7b3f2e",
            fontWeight: 700,
            margin: "0 0 10px",
          }}>
            HOW TO PLAY
          </p> */}

          {/* Steps */}
          {steps.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
              <span style={{ fontSize: "1rem", lineHeight: 1.6, flexShrink: 0 }}>{item.icon}</span>
              <p style={{
                margin: 0,
                fontFamily: "'Sarabun',sans-serif",
                fontSize: "clamp(0.78rem,2vw,0.88rem)",
                color: "#4a2c0a",
                lineHeight: 1.7,
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MindHealthGame() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f0f7ee,#fef9ec)", fontFamily: "'Sarabun','Prompt',sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#5ab1cf,#3d9ab8)", padding: "clamp(1.2rem,4vw,2rem) clamp(1rem,4vw,2rem)", textAlign: "center" }}>
        <div style={{ fontSize: "clamp(1.4rem,4vw,1.8rem)", marginBottom: "4px" }}>🌸</div>
        <h1 style={{ color: "#fff", margin: "0 0 4px", fontSize: "clamp(1.1rem,3vw,1.6rem)", fontWeight: 800 }}>การ์ดพลังใจ</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "clamp(0.75rem,2vw,0.88rem)" }}>
          แตะการ์ดเพื่อพลิก · Dear Me → Dear You
        </p>
        
      </div>

      {/* How To Play — วางระหว่าง Header กับ Grid */}
      <HowToPlay />

      {/* Grid */}
      <div style={{
        maxWidth: "960px", margin: "0 auto",
        padding: "clamp(1rem,3vw,1.5rem)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(clamp(140px, 22vw, 200px), 1fr))",
        gap: "clamp(10px,2vw,18px)",
        boxSizing: "border-box",
      }}>
        {Array.from({ length: 14 }, (_, i) => <FlipCard key={i} index={i} />)}
      </div>
    </div>
  );
}

export default MindHealthGame;