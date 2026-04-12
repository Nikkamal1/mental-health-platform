import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#2d7a96] mt-auto">
      {/* เส้นคั่นด้านบน */}
      <div className="h-1 w-full bg-gradient-to-r from-[#5ab1cf] via-white/40 to-[#5ab1cf]" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* ซ้าย — หัวข้อ + คำอธิบาย */}
          <div className="flex items-start gap-4">
            {/* icon */}
            <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-white text-base font-bold leading-snug">
                ปรึกษาปัญหาสุขภาพจิต
              </h2>
              <p className="text-white/65 text-sm mt-0.5 max-w-xs leading-relaxed">
                หากคุณหรือคนใกล้ชิดต้องการความช่วยเหลือ เราพร้อมให้คำปรึกษา
              </p>
            </div>
          </div>

          {/* ขวา — ปุ่ม + สายด่วน */}
          <div className="flex flex-col items-start sm:items-end gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#2d7a96] px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              ข้อมูลการติดต่อ
            </Link>
            <a
              href="tel:1323"
              className="inline-flex items-center gap-1.5 text-white/80 text-sm hover:text-white transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              สายด่วนสุขภาพจิต&nbsp;<span className="font-bold text-white">1323</span>&nbsp;· 24 ชม.
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar — สีเข้มกว่า แยกชัดเจน */}
      <div className="bg-[#1f5f75] py-3 text-center text-xs text-white/50">
        {/* © {new Date().getFullYear()} Mental Health Support · Suan Sunandha Rajabhat University */}
      </div>
    </footer>
  );
}

export default Footer;