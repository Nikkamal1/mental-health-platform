import React, { useState } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwMilUPJnRM0hTbvZ-ktxgdK0RYDVrzu_cxh7MkEvd3v5jnNZiKDH9A3SEIETn10wwG/exec";
const BG = "linear-gradient(135deg,#f0f7ee,#fef9ec)";

const cards = [
  { id: 1, question: "1 สัปดาห์ที่ผ่านมานี้\nมีเรื่องอะไรบ้างที่คุณ\nภูมิใจในตัวเอง", answerType: "text", placeholder: "เขียนสิ่งที่คุณภูมิใจ..." },
  { id: 2, question: "การ์ดใบนี้เปิดโอกาสให้คุณ\nตั้งคำถามกับตัวเอง 2 ข้อ\nลองคุยกับตัวคุณดูนะ", answerType: "goals", placeholder: ["คำถามข้อที่ 1...", "คำถามข้อที่ 2..."] },
  { id: 3, question: "เขียนข้อดีของคุณ\nออกมา 3-5 อย่าง", answerType: "text", placeholder: "เขียนข้อดีของคุณ..." },
  { id: 4, question: "ถ้ามีโอกาสได้คุยกับตัวเองตอนเด็ก\nอยากจะบอกเขาว่าอะไร\nและเด็กคนนั้นอยากบอกอะไรกับคุณบ้าง", answerType: "text", placeholder: "เขียนจดหมายถึงตัวเองตอนเด็ก..." },
  { id: 5, question: "วันนี้คุณใจดีกับตัวเอง\nแค่ไหน (0-10)", answerType: "score", placeholder: "0" },
  { id: 6, question: "สิ่งที่คุณชอบในตัวเองมากที่สุด\n1 อย่าง คืออะไร", answerType: "text", placeholder: "เขียนสิ่งที่คุณชอบในตัวเอง..." },
  { id: 7, question: "วันนี้คุณรู้สึกยังไงกับชีวิตตัวเอง\nให้คะแนน (0-10)\nและอะไรทำให้เป็นเลขนี้", answerType: "scoreWithReason", placeholder: "อธิบายความรู้สึก..." },
  { id: 8, question: "มีเรื่องไหนในชีวิตช่วงนี้\nที่คุณอยากพัฒนาตัวเองให้ดีขึ้น", answerType: "text", placeholder: "เขียนสิ่งที่อยากพัฒนา..." },
];

// ── shared components ──

function CardBorder() {
  return (
    <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <rect x="8" y="8" width="284" height="364" rx="18" ry="18" fill="none" stroke="#a8c5a0" strokeWidth="2.5" />
      <rect x="16" y="16" width="268" height="348" rx="14" ry="14" fill="none" stroke="#c8dfc4" strokeWidth="1.2" strokeDasharray="6 3" />
      <g transform="translate(150,18)">
        <ellipse cx="0" cy="0" rx="10" ry="7" fill="#8db88a" />
        <path d="M-10,0 C-30,-18 -50,-12 -44,-2 C-38,8 -18,4 -10,0Z" fill="#8db88a" opacity="0.85" />
        <path d="M10,0 C30,-18 50,-12 44,-2 C38,8 18,4 10,0Z" fill="#8db88a" opacity="0.85" />
        <path d="M-5,5 C-15,20 -25,30 -20,38" stroke="#8db88a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M5,5 C15,20 25,30 20,38" stroke="#8db88a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(150,362)">
        <ellipse cx="0" cy="0" rx="10" ry="7" fill="#8db88a" />
        <path d="M-10,0 C-30,-18 -50,-12 -44,-2 C-38,8 -18,4 -10,0Z" fill="#8db88a" opacity="0.85" />
        <path d="M10,0 C30,-18 50,-12 44,-2 C38,8 18,4 10,0Z" fill="#8db88a" opacity="0.85" />
        <path d="M-5,-5 C-15,-20 -25,-30 -20,-38" stroke="#8db88a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M5,-5 C15,-20 25,-30 20,-38" stroke="#8db88a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {[[30,30],[270,30],[30,350],[270,350]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0,72,144,216,288].map((angle,j) => (
            <ellipse key={j} cx={Math.cos(angle*Math.PI/180)*5} cy={Math.sin(angle*Math.PI/180)*5}
              rx="3" ry="2" fill={["#f9c4d2","#c8e6c9","#fff9c4","#e1bee7","#bbdefb"][j]}
              transform={`rotate(${angle},${Math.cos(angle*Math.PI/180)*5},${Math.sin(angle*Math.PI/180)*5})`} />
          ))}
          <circle cx="0" cy="0" r="2" fill="#f8bbd0" />
        </g>
      ))}
    </svg>
  );
}

// ── Header + HowToPlay — ใช้ร่วมกันทุก stage ──
function PageHeader() {
  const [open, setOpen] = useState(false);
  const steps = [
    { icon: "🎴", text: "สุ่มการ์ด 1 ใบ" },
    { icon: "📅", text: "เล่นต่อเนื่องเป็นเวลา 30 วัน" },
    // { icon: "💭", text: "ด้านหน้าการ์ดคือ \"DEAR ME\" เป็นคำถามให้คุณได้เข้าใจตัวเอง" },
    // { icon: "💌", text: "ด้านหลังการ์ดคือ \"DEAR YOU\" เป็นข้อความดีๆ จากพวกเรา" },
  ];
  return (
    <>
      {/* Header bar */}
      <div style={{
        background: "linear-gradient(135deg,#5ab1cf,#3d9ab8)",
        padding: "clamp(1.2rem,4vw,2rem) clamp(1rem,4vw,2rem)",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "clamp(1.4rem,4vw,1.8rem)", marginBottom: "4px" }}>🌸</div>
        <h1 style={{ color: "#fff", margin: "0 0 4px", fontSize: "clamp(1.1rem,3vw,1.6rem)", fontWeight: 800 }}>
          เกมสุขภาพใจ
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "clamp(0.75rem,2vw,0.88rem)" }}>
          "ผู้เล่นจะได้รู้จักและเรียนรู้ตัวเอง
ในมุมมองใหม่ๆ ผ่านการสำรวจ
ความรู้สึกของตัวเอง</p> 
        <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "clamp(0.75rem,2vw,0.88rem)" }}>
ณ ปัจจุบัน
เพื่อที่จะได้เข้าใจ ยอมรับในตัวตน
และเติบโตโดยไม่ลืมคุณค่าของตัวเอง
พร้อมทั้งได้รับการฮีลใจและกำลังใจ"
        </p>
      </div>

      {/* How to play accordion */}
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "12px clamp(1rem,3vw,1.5rem) 0" }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: "100%", background: "linear-gradient(135deg,#fdf8ed,#fef6e4)",
            border: "1.5px solid #f0dea0",
            borderRadius: open ? "16px 16px 0 0" : "16px",
            padding: "12px 20px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            fontFamily: "'Sarabun',sans-serif", transition: "border-radius 0.3s",
          }}
        >
          <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: "clamp(0.95rem,2.5vw,1.1rem)", color: "#7b3f2e", fontWeight: 700 }}>
            ✨ วิธีการเล่น
          </span>
          <span style={{ fontSize: "0.75rem", color: "#b45309", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", display: "inline-block" }}>▼</span>
        </button>
        {open && (
          <div style={{
            background: "#fffdf6", border: "1.5px solid #f0dea0", borderTop: "none",
            borderRadius: "0 0 16px 16px", padding: "14px 20px",
            fontFamily: "'Sarabun',sans-serif", fontSize: "clamp(0.82rem,2vw,0.9rem)",
            color: "#5a3e2b", lineHeight: 1.8,
          }}>
                      {/* Divider */}
          <div style={{ borderTop: "1px dashed #e8d5a0", marginBottom: "14px" }} />

          {/* คำแนะนำ */}
          <p style={{
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
          </p>

          {/* Divider */}
          <div style={{ borderTop: "1px dashed #e8d5a0", marginBottom: "14px" }} />

          {/* HOW TO PLAY label */}
          <p style={{
            fontFamily: "'Dancing Script',cursive",
            fontSize: "clamp(1rem,3vw,1.15rem)",
            color: "#7b3f2e",
            fontWeight: 700,
            margin: "0 0 10px",
          }}>
            HOW TO PLAY
          </p>
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
    </>
  );
}

const textareaStyle = {
  width: "100%", borderRadius: "10px", border: "1.5px solid #c8dfc4",
  padding: "10px 12px", fontSize: "0.9rem", color: "#4a4a4a",
  fontFamily: "inherit", resize: "vertical", outline: "none",
  background: "rgba(255,255,255,0.85)", boxSizing: "border-box", lineHeight: 1.6,
};

function ScoreInput({ value, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
      {[...Array(11)].map((_, i) => (
        <button key={i} onClick={() => onChange(String(i))} style={{
          width: "36px", height: "36px", borderRadius: "50%", border: "2px solid",
          borderColor: value === String(i) ? "#6a9967" : "#c8dfc4",
          background: value === String(i) ? "#6a9967" : "#fff",
          color: value === String(i) ? "#fff" : "#6a9967",
          fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", transition: "all 0.2s",
        }}>{i}</button>
      ))}
    </div>
  );
}

function CardAnswer({ card, answer, setAnswer }) {
  if (card.answerType === "score")
    return <ScoreInput value={answer || ""} onChange={setAnswer} />;
  if (card.answerType === "scoreWithReason")
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <ScoreInput value={answer?.score || ""} onChange={(v) => setAnswer({ ...answer, score: v })} />
        <textarea rows={3} placeholder={card.placeholder} value={answer?.reason || ""}
          onChange={(e) => setAnswer({ ...answer, reason: e.target.value })} style={textareaStyle} />
      </div>
    );
  if (card.answerType === "goals")
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {card.placeholder.map((ph, i) => (
          <textarea key={i} rows={2} placeholder={ph} value={answer?.[i] || ""}
            onChange={(e) => { const next = [...(answer || ["",""])]; next[i] = e.target.value; setAnswer(next); }}
            style={textareaStyle} />
        ))}
      </div>
    );
  return <textarea rows={4} placeholder={card.placeholder} value={answer || ""}
    onChange={(e) => setAnswer(e.target.value)} style={textareaStyle} />;
}

// ── หน้าใส่ชื่อเล่น ──
function NicknameScreen({ onStart }) {
  const [name, setName] = useState("");
  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Sarabun','Prompt',sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      <PageHeader />

      {/* card ใส่ชื่อ */}
      <div style={{ display: "flex", justifyContent: "center", padding: "clamp(1.5rem,4vw,2.5rem) 1rem" }}>
        <div style={{
          position: "relative", width: "100%", maxWidth: "380px",
          background: "#fdfff9", borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(106,153,103,0.18)",
          padding: "3rem 2rem", textAlign: "center",
        }}>
          <CardBorder />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
            <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: "1.8rem", color: "#7b3f2e", display: "block", marginBottom: "1rem" }}>
              Dear me
            </span>
            <p style={{ color: "#5a3e2b", fontWeight: 600, fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              ก่อนเริ่มเกมการ์ดพลังใจ<br />ใส่ชื่อเล่นของคุณก่อนนะคะ 💚
            </p>
            <input
              type="text" placeholder="ชื่อเล่นของคุณ..."
              value={name} onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && name.trim() && onStart(name.trim())}
              style={{
                width: "100%", borderRadius: "12px", border: "1.5px solid #c8dfc4",
                padding: "12px 16px", fontSize: "1rem", color: "#4a4a4a",
                fontFamily: "inherit", outline: "none", background: "rgba(255,255,255,0.9)",
                boxSizing: "border-box", textAlign: "center", marginBottom: "1rem",
              }}
              autoFocus
            />
            <button
              onClick={() => name.trim() && onStart(name.trim())}
              disabled={!name.trim()}
              style={{
                width: "100%", padding: "13px", borderRadius: "12px", border: "none",
                background: name.trim() ? "linear-gradient(135deg,#8db88a,#6a9967)" : "#d5e8d4",
                color: "#fff", fontWeight: 700, fontSize: "1rem",
                cursor: name.trim() ? "pointer" : "not-allowed",
                boxShadow: name.trim() ? "0 4px 12px rgba(106,153,103,0.3)" : "none",
                transition: "all 0.2s",
              }}
            >
              เริ่มเลย →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── หน้าเสร็จแล้ว ──
function DoneScreen({ nickname, onRestart }) {
  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Sarabun','Prompt',sans-serif" }}>
      <PageHeader />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
        <h2 style={{ color: "#4a7c59", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          ขอบคุณ {nickname} นะคะ!
        </h2>
        <p style={{ color: "#6a9967", marginBottom: "0.5rem" }}>บันทึกคำตอบเรียบร้อยแล้ว 💚</p>
        <p style={{ color: "#8db88a", fontSize: "0.875rem", marginBottom: "1.5rem" }}>ขอบคุณที่ใจดีกับตัวเองวันนี้</p>
        <button onClick={onRestart} style={{
          background: "#6a9967", color: "#fff", border: "none", borderRadius: "999px",
          padding: "12px 32px", fontWeight: 700, fontSize: "1rem", cursor: "pointer",
        }}>เล่นอีกครั้ง</button>
      </div>
    </div>
  );
}

// ── Main ──
function MentalStrength() {
  const [stage, setStage] = useState("nickname");
  const [nickname, setNickname] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flipped, setFlipped] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const card = cards[current];
  const isLast = current === cards.length - 1;

  const handleStart = (name) => { setNickname(name); setStage("game"); };

  const handleNext = () => {
    if (isLast) { handleSubmit(); return; }
    setFlipped(true);
    setTimeout(() => { setCurrent(c => c + 1); setFlipped(false); }, 350);
  };

  const handlePrev = () => {
    if (current === 0) return;
    setFlipped(true);
    setTimeout(() => { setCurrent(c => c - 1); setFlipped(false); }, 350);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, answers }),
      });
    } catch (err) { console.error("Submit error:", err); }
    setSubmitting(false);
    setStage("done");
  };

  const handleRestart = () => {
    setAnswers({}); setCurrent(0); setFlipped(false); setNickname(""); setStage("nickname");
  };

  if (stage === "nickname") return <NicknameScreen onStart={handleStart} />;
  if (stage === "done") return <DoneScreen nickname={nickname} onRestart={handleRestart} />;

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Sarabun','Prompt',sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      {/* ✅ Header + HowToPlay ใช้ component เดียวกัน */}
      <PageHeader />

      {/* game area */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(1rem,3vw,1.5rem) 1rem" }}>

        {/* progress */}
        <div style={{ width: "100%", maxWidth: "420px", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#8db88a", marginBottom: "4px" }}>
            <span>👤 {nickname}</span>
            <span>การ์ดที่ {current + 1} / {cards.length}</span>
          </div>
          <div style={{ height: "6px", background: "#dceeda", borderRadius: "999px", overflow: "hidden" }}>
            <div style={{
              height: "100%", background: "linear-gradient(90deg,#8db88a,#6a9967)",
              borderRadius: "999px", width: `${((current + 1) / cards.length) * 100}%`,
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>

        {/* card */}
        <div style={{
          position: "relative", width: "100%", maxWidth: "420px",
          background: "#fdfff9", borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(106,153,103,0.18)",
          padding: "clamp(2.5rem,6vw,3rem) clamp(1.5rem,5vw,2.5rem)",
          opacity: flipped ? 0 : 1, transform: flipped ? "scale(0.95)" : "scale(1)",
          transition: "opacity 0.3s, transform 0.3s",
          minHeight: "480px", display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <CardBorder />
          <div style={{ textAlign: "center", position: "relative", zIndex: 1, marginBottom: "1rem" }}>
            <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: "clamp(1.4rem,4vw,1.8rem)", color: "#7b3f2e", display: "block", marginBottom: "1rem" }}>
              Dear me
            </span>
            <p style={{ fontSize: "clamp(0.95rem,2.5vw,1.05rem)", color: "#5a3e2b", fontWeight: 600, lineHeight: 1.7, whiteSpace: "pre-line", margin: 0 }}>
              {card.question}
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "1rem" }}>
            <CardAnswer card={card} answer={answers[card.id]} setAnswer={(v) => setAnswers(prev => ({ ...prev, [card.id]: v }))} />
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "10px", marginTop: "1.5rem" }}>
            {current > 0 && (
              <button onClick={handlePrev} style={{
                flex: 1, padding: "12px", borderRadius: "12px",
                border: "2px solid #c8dfc4", background: "#fff",
                color: "#6a9967", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
              }}>← ย้อนกลับ</button>
            )}
            <button onClick={handleNext} disabled={submitting} style={{
              flex: 2, padding: "12px", borderRadius: "12px", border: "none",
              background: "linear-gradient(135deg,#8db88a,#6a9967)",
              color: "#fff", fontWeight: 700, fontSize: "0.95rem",
              cursor: submitting ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(106,153,103,0.3)",
            }}>
              {submitting ? "กำลังบันทึก..." : isLast ? "เสร็จแล้ว 🎉" : "การ์ดถัดไป →"}
            </button>
          </div>
        </div>

        {/* dots */}
        <div style={{ display: "flex", gap: "6px", marginTop: "1.25rem" }}>
          {cards.map((_, i) => (
            <div key={i} style={{
              width: i === current ? "20px" : "8px", height: "8px", borderRadius: "999px",
              background: i === current ? "#6a9967" : "#c8dfc4", transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentalStrength;