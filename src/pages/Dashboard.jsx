import React, { useState, useEffect, useMemo } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzFDHeqrfCkNPY-4lfECwR9TBhtYM80Vrt1rearzMTiFznKvlFKfP6mOGP7Mja_0luN/exec";

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "20px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderLeft: `4px solid ${color}`, display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ fontSize: "2rem", background: color + "18", borderRadius: "12px", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
      <div>
        <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1e293b", lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "2px" }}>{label}</div>
        {sub && <div style={{ fontSize: "0.75rem", color: color, marginTop: "2px", fontWeight: 600 }}>{sub}</div>}
      </div>
    </div>
  );
}

function ScoreBar({ label, score, max = 10, color }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "#64748b", marginBottom: "4px" }}>
        <span>{label}</span>
        <span style={{ fontWeight: 700, color: "#1e293b" }}>{score.toFixed(1)} / {max}</span>
      </div>
      <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "999px", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: "999px", width: `${(score / max) * 100}%`, background: color, transition: "width 1s ease" }} />
      </div>
    </div>
  );
}

function ResponseRow({ entry, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: "8px" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: `hsl(${(index * 67) % 360}, 60%, 85%)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", color: `hsl(${(index * 67) % 360}, 50%, 35%)` }}>
            {entry.nickname?.[0] || "?"}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.95rem" }}>{entry.nickname}</div>
            <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{entry.date}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>ใจดีกับตัวเอง</div>
            <div style={{ fontWeight: 800, color: "#6a9967", fontSize: "1.1rem" }}>{entry.q5}/10</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>ความรู้สึก</div>
            <div style={{ fontWeight: 800, color: "#5ab1cf", fontSize: "1.1rem" }}>{entry.q7s}/10</div>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "1rem", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</div>
        </div>
      </button>
      {open && (
        <div style={{ padding: "0 20px 16px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "10px", marginTop: "12px" }}>
            {[
              { label: "💪 สิ่งที่ภูมิใจ", value: entry.q1 },
              { label: "🎯 คำหมายข้อ 1", value: entry.q2g1 },
              { label: "🎯 คำหมายข้อ 2", value: entry.q2g2 },
              { label: "✨ ข้อดีของตัวเอง", value: entry.q3 },
              { label: "💌 จดหมายถึงตัวเองตอนเด็ก", value: entry.q4 },
              { label: "❤️ สิ่งที่ชอบในตัวเอง", value: entry.q6 },
              { label: "💭 เหตุผลความรู้สึก", value: entry.q7r },
              { label: "🌱 สิ่งที่อยากพัฒนา", value: entry.q8 },
            ].map((item) => (
              <div key={item.label} style={{ background: "#f8fafc", borderRadius: "10px", padding: "10px 14px" }}>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "0.875rem", color: "#334155", lineHeight: 1.5 }}>{item.value || "-"}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("overview");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(APPS_SCRIPT_URL, { method: "GET" });
      const json = await res.json();
      if (json.data) {
        setData(json.data);
      } else {
        setError("ไม่พบข้อมูล หรือยังไม่มีคนเล่นเกม");
      }
    } catch (e) {
      setError("เชื่อมต่อ Google Sheets ไม่ได้ — ตรวจสอบ URL หรือ Deploy อีกครั้ง");
    }
    setLoading(false);
  };

  // โหลดอัตโนมัติตอนเปิดหน้า
  useEffect(() => { fetchData(); }, []);

  const filtered = useMemo(() =>
    data.filter(d => d.nickname?.toLowerCase().includes(search.toLowerCase())),
    [data, search]
  );

  const avgQ5 = useMemo(() => data.length ? data.reduce((s, d) => s + Number(d.q5 || 0), 0) / data.length : 0, [data]);
  const avgQ7 = useMemo(() => data.length ? data.reduce((s, d) => s + Number(d.q7s || 0), 0) / data.length : 0, [data]);
  const scoreColor = (v) => v >= 7 ? "#6a9967" : v >= 4 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ minHeight: "100vh", background: "#f0f7ee", fontFamily: "'Sarabun','Prompt',sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#5ab1cf,#3d9ab8)", padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", marginBottom: "2px" }}>🌿 Dear Me · Dashboard</div>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.2rem,3vw,1.6rem)", fontWeight: 800, margin: 0 }}>สถิติการ์ดพลังใจ</h1>
        </div>
        <button onClick={fetchData} disabled={loading} style={{ background: "rgba(255,255,255,0.2)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: "10px", padding: "8px 20px", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer", backdropFilter: "blur(4px)" }}>
          {loading ? "⏳ กำลังโหลด..." : "🔄 รีเฟรช"}
        </button>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(1rem,3vw,2rem)" }}>

        {/* Error */}
        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "14px 20px", marginBottom: "20px", color: "#dc2626", fontSize: "0.875rem" }}>
            ⚠️ {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#94a3b8" }}>
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⏳</div>
            <div>กำลังโหลดข้อมูลจาก Google Sheets...</div>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && data.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#94a3b8" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>🃏</div>
            <div style={{ fontWeight: 700, color: "#64748b", marginBottom: "4px" }}>ยังไม่มีข้อมูล</div>
            <div style={{ fontSize: "0.875rem" }}>รอให้มีคนเล่นเกมการ์ดพลังใจก่อนนะคะ</div>
          </div>
        )}

        {!loading && data.length > 0 && (
          <>
            {/* Stat cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginBottom: "24px" }}>
              <StatCard icon="👥" label="ผู้เล่นทั้งหมด" value={data.length} sub={`วันนี้ ${data.filter(d => d.date === data[0]?.date).length} คน`} color="#5ab1cf" />
              <StatCard icon="💚" label="คะแนนใจดีกับตัวเอง (เฉลี่ย)" value={avgQ5.toFixed(1)} sub="จาก 10 คะแนน" color="#6a9967" />
              <StatCard icon="😊" label="คะแนนความรู้สึก (เฉลี่ย)" value={avgQ7.toFixed(1)} sub="จาก 10 คะแนน" color="#f59e0b" />
              <StatCard icon="🌱" label="คะแนนสูงสุด" value={Math.max(...data.map(d => Number(d.q5 || 0)))} sub="ใจดีกับตัวเองมากที่สุด" color="#8b5cf6" />
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              {[["overview","📊 ภาพรวม"],["responses","📋 คำตอบทั้งหมด"]].map(([key, label]) => (
                <button key={key} onClick={() => setTab(key)} style={{ padding: "8px 20px", borderRadius: "10px", border: "none", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s", background: tab === key ? "#5ab1cf" : "#fff", color: tab === key ? "#fff" : "#64748b", boxShadow: tab === key ? "0 4px 12px rgba(90,177,207,0.35)" : "0 1px 4px rgba(0,0,0,0.06)" }}>{label}</button>
              ))}
            </div>

            {tab === "overview" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
                <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ margin: "0 0 20px", color: "#1e293b", fontSize: "1rem", fontWeight: 800 }}>📈 คะแนนรายคน</h3>
                  {data.slice(0, 8).map((d, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `hsl(${(i*67)%360},60%,85%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, color: `hsl(${(i*67)%360},50%,35%)`, flexShrink: 0 }}>
                        {d.nickname?.[0]}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.78rem", color: "#64748b", marginBottom: "3px" }}>{d.nickname}</div>
                        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                          <div style={{ flex: 1, height: "6px", background: "#f1f5f9", borderRadius: "999px", overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${(Number(d.q5||0)/10)*100}%`, background: scoreColor(Number(d.q5||0)), borderRadius: "999px" }} />
                          </div>
                          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: scoreColor(Number(d.q5||0)), width: "28px", textAlign: "right" }}>{d.q5}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ margin: "0 0 20px", color: "#1e293b", fontSize: "1rem", fontWeight: 800 }}>🎯 คะแนนเฉลี่ยทั้งหมด</h3>
                  <ScoreBar label="💚 ใจดีกับตัวเอง" score={avgQ5} color="#6a9967" />
                  <ScoreBar label="😊 ความรู้สึกกับชีวิต" score={avgQ7} color="#5ab1cf" />
                  <div style={{ marginTop: "20px", padding: "16px", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
                    <div style={{ fontSize: "0.78rem", color: "#6a9967", fontWeight: 700, marginBottom: "8px" }}>🌟 สิ่งที่คนชอบในตัวเอง</div>
                    {data.slice(0, 4).map((d, i) => (
                      <div key={i} style={{ fontSize: "0.82rem", color: "#334155", padding: "4px 0", borderBottom: i < 3 ? "1px solid #d1fae5" : "none" }}>
                        <span style={{ color: "#6a9967", fontWeight: 600 }}>{d.nickname}:</span> {d.q6 || "-"}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", gridColumn: "1 / -1" }}>
                  <h3 style={{ margin: "0 0 16px", color: "#1e293b", fontSize: "1rem", fontWeight: 800 }}>🌱 สิ่งที่ทุกคนอยากพัฒนา</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {data.map((d, i) => d.q8 && (
                      <span key={i} style={{ background: `hsl(${(i*67)%360},60%,94%)`, color: `hsl(${(i*67)%360},50%,35%)`, padding: "6px 14px", borderRadius: "999px", fontSize: "0.82rem", fontWeight: 600 }}>
                        {d.q8}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "responses" && (
              <div>
                <input type="text" placeholder="🔍 ค้นหาชื่อเล่น..." value={search} onChange={(e) => setSearch(e.target.value)}
                  style={{ width: "100%", borderRadius: "12px", border: "1.5px solid #e2e8f0", padding: "12px 16px", fontSize: "0.95rem", marginBottom: "16px", outline: "none", background: "#fff", boxSizing: "border-box", fontFamily: "inherit" }} />
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "12px" }}>แสดง {filtered.length} รายการ · กดเพื่อดูคำตอบทั้งหมด</div>
                {filtered.map((entry, i) => <ResponseRow key={i} entry={entry} index={i} />)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;