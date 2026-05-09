import React from "react"
import Navbar from "./Components/navbar"
import Home from "./pages/home"
import { Routes, Route } from "react-router-dom"
import Media from "./pages/Media"
import Media1 from "./pages/Media1"
import Detail1 from "./pages/detail1"
import Detail2 from "./pages/detail2"
import StressAssessment from "./pages/StressAssessment"
import MentalStrength from "./pages/MentalStrength"
import MindHealthGame from "./pages/MindHealthGame"
import ContactPage from "./pages/ContactPage"
import Footer from "./Components/Footer"
import Dashboard from "./pages/Dashboard"

// ✅ import รูป QR
import qrImage from "./assets/payment.jpg"

// ✅ เปิด/ปิดระบบตรงนี้
const WEBSITE_ENABLED = false

function App() {

  // ===============================
  // ✅ หน้าแจ้งเตือนปิดเว็บไซต์
  // ===============================
  if (!WEBSITE_ENABLED) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden border border-red-200">

          {/* Header */}
          <div className="bg-red-600 text-white text-center py-6 px-4">
            <h1 className="text-4xl font-bold">
              เว็บไซต์ถูกระงับชั่วคราว
            </h1>

            <p className="mt-3 text-lg">
              กรุณาชำระค่าพัฒนาเว็บไซต์เพื่อเปิดใช้งานระบบอีกครั้ง
            </p>
          </div>

          {/* Content */}
          <div className="p-8">

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                เว็บไซต์นี้พัฒนาและดูแลระบบตั้งแต่วันที่
                <span className="font-bold text-red-600">
                  {" "}22 สิงหาคม 2568{" "}
                </span>
                ถึง
                <span className="font-bold text-red-600">
                  {" "}13 เมษายน 2569
                </span>
              </p>

              <p className="text-center text-3xl font-bold text-red-700 mt-5">
                ยอดค้างชำระ 10,000 บาท
              </p>
            </div>

            {/* ✅ รูป QR */}
            <div className="flex justify-center mb-8">
              <img
                src={qrImage}
                alt="QR Payment"
                className="w-full max-w-md rounded-xl shadow-lg border"
              />
            </div>

            <div className="text-center text-gray-600">
              <p className="mb-2">
                หลังชำระเงินเรียบร้อย กรุณาติดต่อผู้พัฒนา
              </p>

              <p className="font-semibold text-black">
                เพื่อเปิดใช้งานเว็บไซต์อีกครั้ง
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }

  // ===============================
  // ✅ เว็บไซต์ปกติ
  // ===============================
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media." element={<Media1 />} />
          <Route path="/detail1" element={<Detail1 />} />
          <Route path="/detail2" element={<Detail2 />} />
          <Route path="/stress" element={<StressAssessment />} />
          <Route path="/game" element={<MentalStrength />} />
          <Route path="/mental" element={<MindHealthGame />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
