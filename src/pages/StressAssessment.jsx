import React, { useMemo, useState } from "react";
import Footer from "../Components/Footer";

function StressAssessment() {
    const questions = useMemo(
        () => [
            "นอนไม่หลับเพราะคิดมากหรือกังวลใจ",
            "รู้สึกหงุดหงิด รำคาญใจ",
            "ทำอะไรไม่ได้เลยเพราะประสาทตึงเครียด",
            "มีความวุ่นวายใจ",
            "ไม่อยากพบปะผู้คน",
            "ปวดหัวข้างเดียว หรือปวดบริเวณขมับทั้ง 2 ข้าง",
            "รู้สึกไม่มีความสุขและเศร้าหมอง",
            "รู้สึกหมดหวังในชีวิต",
            "รู้สึกชีวิตตนเองไม่มีคุณค่า",
            "กระวนกระวายอยู่ตลอดเวลา",
            "รู้สึกว่าตนเองไม่มีสมาธิ",
            "รู้สึกเพลียจนไม่มีแรงจะทำอะไร",
            "รู้สึกเหนื่อยหน่ายไม่อยากทำอะไร",
            "มีอาการหัวใจเต้นแรง",
            "เสียงสั่น ปากสั่น หรือมือสั่นเวลาไม่พอใจ",
            "รู้สึกกลัวผิดพลาดในการทำสิ่งต่าง ๆ",
            "ปวดหรือเกร็งกล้ามเนื้อบริเวณท้ายทอย หลัง หรือไหล่",
            "ตื่นเต้นง่ายกับเหตุการณ์ที่ไม่คุ้นเคย",
            "มึนงงหรือเวียนศีรษะ",
            "ความสุขทางเพศลดลง",
        ],
        []
    );

    const [answers, setAnswers] = useState({});
    const [mode, setMode] = useState("quiz"); // quiz | result

    const allAnswered = questions.length === Object.keys(answers).length;
    const totalScore = useMemo(
        () => Object.values(answers).reduce((sum, val) => sum + Number(val || 0), 0),
        [answers]
    );

    const handleChange = (index, value) => {
        setAnswers((prev) => ({ ...prev, [index]: Number(value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!allAnswered) return;
        setMode("result");
    };

    const handleRestart = () => {
        setAnswers({});
        setMode("quiz");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const ranges = [
        {
            label: "0 - 5 ",
            from: 0,
            to: 5,
            meaning: "ความเครียดต่ำมาก",
            meaningDetail: "คุณมีความเครียดน้อยกว่าปกติ อาจเป็นเพราะ คุณมีชีวิตที่เรียบง่ายไม่จำเป็นต้องต่อสู้ดิ้นรนในการดำเนินชีวิตสีกเท่าใดนัก ชีวิตไม่ค่อยมีเรื่องให้ต้องตื่นเต้น และคุณเองก็ไม่ค่อยกระตือรือร้นเลย ",
            // image: "/images/stress_0_5.png",
            emoji: "😊",
            bgColor: "bg-blue-50 border-blue-200",
            badgeColor: "bg-blue-200 text-blue-900",
            emojiBg: "bg-yellow-100"
        },
        {
            label: "6 - 17",
            from: 6,
            to: 17,
            meaning: "ความเครียดต่ำ",
            meaningDetail: "คุณมีความเครียดในระดับปกติ นั่นคือ คุณสามารถจัดการกับความเครียดที่เกิดขึ้นในชีวิตประจำวันได้ดีและสามารถปรับตัว ปรับใจ ให้เข้ากับสถานการณ์ต่าง ๆ ได้อย่างถูกต้องเหมาะสม คุณควรพยายามคงระดับความเครียดในระดับนี้ต่อไปให้ได้นาน ๆ",
            // image: "/images/stress_6_7.png",
            emoji: "🙂",
            bgColor: "bg-green-50 border-green-200",
            badgeColor: "bg-green-200 text-green-900",
            emojiBg: "bg-green-100"

        },
        {
            label: "18 - 25",
            from: 18,
            to: 25,
            meaning: "ความเครียดปานกลาง",
            meaningDetail: "คุณมีความเครียดสูงกว่าระดับปกติเล็กน้อย แสดงว่า คุณอาจกำลังมีปัญหาบางอย่างที่ทำให้ไม่สบายใจอยู่ ความเครียดในระดับนี้ อาจทำให้มีอาการผิดปกติทางร่างกาย จิตใจ และพฤติกรรมเล็กน้อยพอทนได้ และเมื่อได้พักผ่อนหย่อนใจบ้างก็จะรู้สึกดีขึ้นเอง",
            // image: "/images/stress_18_25.png",
            emoji: "😐",
            bgColor: "bg-amber-50 border-amber-200",
            badgeColor: "bg-amber-200 text-amber-900",
            emojiBg: "bg-amber-100"
        },
        {
            label: "26 - 29",
            from: 26,
            to: 29,
            meaning: "ความเครียดค่อนข้างสูง",
            meaningDetail: "คุณมีความเครียดสูงกว่าระดับปกติปานกลาง แสดงว่า คุณอาจกำลังมีปัญหาบางอย่างในชีวิตที่คุณยังหาทางแก้ไขไม่ได้ ทำให้มีอาการผิดปกติทางร่างกาย จิตใจและพฤติกรรมอย่างเห็นได้ชัด และแม้คุณจะพักผ่อนหย่อนใจแล้ว ก็ยังอาจจะไม่หายเครียด ต้องฝึกเทคนิคเฉพาะในการคลายเครียดจึงจะช่วยได้",
            // image: "/images/stress_26_29.png",
            emoji: "😟",
            bgColor: "bg-orange-50 border-orange-200",
            badgeColor: "bg-orange-200 text-orange-900",
            emojiBg: "bg-orange-100"

        },
        {
            label: "30 - 60",
            from: 30,
            to: 60,
            meaning: "ความเครียดสูงมาก",
            meaningDetail: "คุณมีความเครียดสูงกว่าระดับปกติมาก คุณอาจกำลังเผชิญภาวะวิกฤตในชีวิตหรือไม่คุณก็ได้สะสมความเครียด เอาไว้มากจนเกินไปเป็นเวลานาน ทำให้มีอาการเจ็บป่วย ที่รุนแรง หรือเรื้อรัง ความเครียดในระดับนี้ นอกจากต้องฝึกเทคนิคกาคลายเครียดแล้ว ควรไปพบจิตแพทย์เพื่อขอคำปรึกษาต่อไปด้วยจึงจะเป็นการดี",
            // image: "/images/stress_30_60.png",
            emoji: "😢",
            bgColor: "bg-red-50 border-red-200",
            badgeColor: "bg-red-200 text-red-900",
            emojiBg: "bg-red-100"
        },
    ];

    const matchedRangeIndex = ranges.findIndex(
        (r) => totalScore >= r.from && totalScore <= r.to
    );

    return (
        <section className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                {mode === "quiz" && (
                    <>
                        <header className="mb-6 sm:mb-8">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                แบบประเมินความเครียด (กรมสุขภาพจิต)
                            </h1>
                            <p className="mt-1 text-sm text-slate-600">
                                ตัวเลือก: 1. ไม่เคยเลย  2. เป็นครั้งคราว  3. เป็นบ่อย 4. เป็นประจำ — กรุณาตอบให้ครบทุกข้อ
                            </p>
                        </header>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {questions.map((q, index) => (
                                <fieldset
                                    key={index}
                                    className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                                >
                                    <legend className="mb-3 text-sm font-medium text-slate-800">
                                        {index + 1}. {q}
                                    </legend>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        {["ไม่เคยเลย", "เป็นครั้งคราว", "เป็นบ่อย", "เป็นประจำ"].map(
                                            (label, val) => (
                                                <label
                                                    key={val}
                                                    className="flex items-center gap-2 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`q-${index}`}
                                                        value={val}
                                                        checked={answers[index] === val}
                                                        onChange={(e) =>
                                                            handleChange(index, e.target.value)
                                                        }
                                                        className="h-4 w-4 text-slate-900"
                                                    />
                                                    <span className="text-sm text-slate-700">
                                                        {val + 1}. {label}
                                                    </span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </fieldset>
                            ))}

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="submit"
                                    disabled={!allAnswered}
                                    className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 ${allAnswered
                                        ? "bg-[#01bff5] hover:bg-slate-800"
                                        : "bg-slate-400 cursor-not-allowed"
                                        }`}
                                >
                                    ส่งแบบประเมิน
                                </button>
                                <button
                                    type="button"
                                    onClick={handleRestart}
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                                >
                                    ล้างคำตอบ
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {mode === "result" && (
                    <div
                        id="assessment-result"
                        className="mt-10 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                    >
                        <h2 className="text-lg font-semibold text-slate-900">ผลคะแนนรวม</h2>
                        <p className="mt-1 text-slate-700">
                            คะแนนของคุณ: <span className="font-bold">{totalScore}</span> จาก 60
                        </p>

                        {/* ลิงก์เพิ่มเติมตามคะแนน */}
                        {matchedRangeIndex === 3 && (
                            <div className="mt-4">
                                <a
                                    href="/detail2?focus=2"
                                    className="inline-block text-[#f55201] underline hover:text-slate-800 font-medium"
                                >
                                    👉 คลิกที่นี่เพื่อดูข้อมูลเกี่ยวกับการนวดคลายเครียด
                                </a>
                            </div>
                        )}


                        {matchedRangeIndex === 4 && (
                            <div className="mt-4">
                                <a
                                    href="tel:1323"
                                    className="inline-block text-red-600 underline hover:text-red-800 font-medium"
                                >
                                    📞 โทรสายด่วนสุขภาพจิต 1323
                                </a>
                            </div>
                        )}

                        {/* ภาพหลักของช่วงคะแนน */}
                        {matchedRangeIndex !== -1 && (
                            <div className={`mt-6 rounded-xl p-6 shadow-sm border ${ranges[matchedRangeIndex].bgColor}`}>
                                <div className="flex items-start gap-4">
                                    {/* อีโมจิ */}
                                    <div className="flex-shrink-0">
                                        <div className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${ranges[matchedRangeIndex].emojiBg}`}>
                                            {ranges[matchedRangeIndex].emoji}
                                        </div>
                                    </div>
                                    {/* ข้อความ */}
                                    <div>
                                        <div className={`font-bold px-4 py-1 rounded ${ranges[matchedRangeIndex].badgeColor}`}>
                                            {ranges[matchedRangeIndex].label} คะแนน
                                        </div>
                                        <p className="mt-3 text-slate-700 leading-relaxed">
                                            {ranges[matchedRangeIndex].meaningDetail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ภาพทุกช่วงสเกล */}
                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-slate-800 mb-3">
                                ตารางภาพผลลัพธ์ทุกช่วงคะแนน
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {ranges.map((r, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-xl shadow-sm border ${r.bgColor} ${idx === matchedRangeIndex ? "ring-1 ring-slate-900" : "border-slate-200"
                                            }`}
                                    >

                                        <div className="flex items-start gap-4">
                                            {/* อีโมจิ */}
                                            <div className="flex-shrink-0">
                                                <div className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${r.emojiBg}`}>
                                                    {r.emoji}
                                                </div>
                                            </div>
                                            {/* ข้อความ */}
                                            <div>
                                                <div className={`font-bold px-4 py-1 rounded ${r.badgeColor}`}>
                                                    {r.label} คะแนน
                                                </div>
                                                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                                    {r.meaningDetail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                            
                        </div>
                        


                        <button
                            onClick={handleRestart}
                            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#01bff5] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        >
                            กลับไปทำแบบทดสอบอีกครั้ง
                        </button>
                    </div>
                    
                    
                )}
                {/* ✅ ใส่ตรงนี้ — โชว์เฉพาะตอนดูผลลัพธ์ */}
{/* {mode === "result" && <Footer />} */}
            </div>
        </section>
    );
}

export default StressAssessment;
