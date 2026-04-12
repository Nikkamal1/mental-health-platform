import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/SSRU-Logo.png";
import logo3 from "../assets/logo/BPH.png";
import logo2 from "../assets/logo/AHS.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "หน้าหลัก", path: "/" },
    { name: "สื่อ", path: "/media." },
    { name: "แบบประเมินความเครียด", path: "/stress" },
    { name: "พลังใจ", path: "/mental" },
    { name: "เกมสุขภาพใจ", path: "/game" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-[#5ab1cf] border-b border-[#5ab1cf] shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* โลโก้ */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
            <img src={logo2} alt="Logo2" className="h-20 w-auto" />
            <img src={logo3} alt="Logo3" className="h-20 w-auto" />
          </Link>

          {/* ปุ่มมือถือ (เฉพาะจอ < sm) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              type="button"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* เมนูแนวนอน (สำหรับหน้าจอ >= sm) */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 flex-1 overflow-x-auto">
            <ul className="flex flex-nowrap items-center space-x-4">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name} className="flex-shrink-0">
                    <Link
                      to={link.path}
                      className={`block py-2 px-3 text-white text-lg font-medium relative
                        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all
                        hover:after:w-full
                        ${isActive ? "after:w-full" : ""}
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay มือถือ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] sm:hidden"
          role="presentation"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* เมนู dropdown มือถือ */}
      <div
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[420px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        } z-50 relative`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 sm:px-6">
          <ul className="mt-2 mb-4 space-y-1 rounded-lg bg-[#5ab1cf] p-2 shadow-md">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block rounded-md py-3 px-4 text-white text-lg font-medium ${
                      isActive ? "bg-white/10" : "hover:bg-white/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
