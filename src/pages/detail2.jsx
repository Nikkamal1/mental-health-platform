import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import heroImage1 from "../assets/img-d2/d1.jpeg";
import heroImage2 from "../assets/img-d2/d2.jpeg";
import heroImage3 from "../assets/img-d2/d3.jpeg";
import heroImage4 from "../assets/img-d2/d4.jpeg";
import heroImage5 from "../assets/img-d2/d5.jpeg";

// เพิ่มรูป detail แต่ละเมนู
import detailImg1 from "../assets/img-d2/d1.1.jpg";
import detailImg2 from "../assets/img-d2/d1.2.jpg";
import detailImg3 from "../assets/img-d2/d2.1.jpg";
import detailImg4 from "../assets/img-d2/d3.1.jpg";
import detailImg5 from "../assets/img-d2/d3.2.jpg";
import detailImg6 from "../assets/img-d2/d4.1.jpg";

function Detail2() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImageSet, setActiveImageSet] = useState([]);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const focusIndex = parseInt(params.get("focus"));

  if (!isNaN(focusIndex) && mainImages[focusIndex]) {
    const { detailImages } = mainImages[focusIndex];
    if (detailImages && detailImages.length > 0) {
      setActiveImageSet(detailImages);
      setCurrentImageIndex(0);
      setShowModal(true);
    }
  }
}, [location.search]);

  const mainImages = [
    {
      src: heroImage1,
      alt: "ฝึกสมาธิคลายเครียด_ลดโรค",
      description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
      detailImages: [
        { src: detailImg1, alt: "Detail image 1.1" },
        { src: detailImg2, alt: "Detail image 1.2" },
      ],
    },
    {
      src: heroImage2,
      alt: "สุคนธบำบัด",
      description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
      detailImages: [
        { src: detailImg3, alt: "Detail image 2.1" },
      ],
    },
    {
      src: heroImage3,
      alt: "การนวดคลายเครียด",
      description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
      detailImages: [
        { src: detailImg4, alt: "Detail image 3.1" },
        { src: detailImg5, alt: "Detail image 3.1" },
      ],
    },
    {
      src: heroImage4,
      alt: "สมุนไพรส่งเสริมสุขภาพ",
      description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
      detailImages: [
        { src: detailImg6, alt: "Detail image 4.1" },
      ],
    },
    // {
    //   src: heroImage5,
    //   alt: "คลิป",
    //   description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
    //   detailImages: [
    //     { src: detailImg6, alt: "Detail image 5.1" },
    //   ],
    // },
  ];

  const handleImageClick = (details = []) => {
    if (!details.length) return;
    setActiveImageSet(details);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % activeImageSet.length);

  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + activeImageSet.length) % activeImageSet.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 50) nextImage();
      else if (distance < -50) prevImage();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 p-6 max-w-6xl mx-auto">
        {mainImages.map((img, index) => {
          let colClass = "";
          if (index === 0) colClass = "lg:col-span-2 lg:col-start-1";
          if (index === 1) colClass = "lg:col-span-2 lg:col-start-3";
          if (index === 2) colClass = "lg:col-span-2 lg:col-start-5";
          if (index === 3) colClass = "lg:col-span-2 lg:col-start-2";
          if (index === 4) colClass = "lg:col-span-2 lg:col-start-4";

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg ${colClass}`}
            >
              <button
                type="button"
                onClick={() => handleImageClick(img.detailImages)}
                className="block w-full cursor-pointer"
              >
                <div className="relative w-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{img.title}</h3>
                      <p className="text-sm opacity-90">{img.description}</p>
                    </div>
                  </div>
                </div>
              </button>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-xs text-slate-600">{img.description}</p>
                  </div>
                  <button
                    onClick={() => handleImageClick(img.detailImages)}
                    className="ml-3 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={activeImageSet[currentImageIndex].src}
              alt={activeImageSet[currentImageIndex].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-2 -right-2 rounded-full bg-white/90 p-2 text-slate-800 shadow hover:bg-white"
              aria-label="Close modal"
            >
              ✕
            </button>
            {activeImageSet.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow hover:bg-white"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow hover:bg-white"
                >
                  ›
                </button>
              </>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {activeImageSet.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail2;
