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
import ContactPage from "./pages/ContactPage"   // ✅ ย้ายเข้า pages/
import Footer from "./Components/Footer"         // ✅ เพิ่ม import
import Dashboard from "./pages/Dashboard"
function App() {
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