import React, { useState } from "react";
import heroImage from "../assets/img-d1/d1.jpeg";
import heroImage2 from "../assets/img-d1/d2.jpeg";
import heroImage3 from "../assets/img-d1/d1.1.jpg";
import heroImage4 from "../assets/img-d1/d1.2.jpg";
import heroImage5 from "../assets/img-d1/d2.1.jpg";
import heroImage6 from "../assets/img-d1/d2.2.jpg";

function Media() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImageSet, setActiveImageSet] = useState([]); // <-- ใช้เพื่อกำหนดชุดภาพที่จะแสดง

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const images = [
    { src: heroImage, alt: "Media image 1", title: "", description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม", link: "" },
    { src: heroImage2, alt: "Media image 2", title: "", description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม", link: "" },
  ];

  // ภาพของแต่ละกลุ่ม
  const imageSets = {
    0: [
      { src: heroImage3, alt: "Detail image 1.1" },
      { src: heroImage4, alt: "Detail image 1.2" },
    ],
    1: [
      { src: heroImage5, alt: "Detail image 2.1" },
      { src: heroImage6, alt: "Detail image 2.2" },
    ],
  };

  const handleImageClick = (index) => {
    setActiveImageSet(imageSets[index] || []);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 max-w-full mx-auto">
        {images.map((img, index) => {
          const colStartClass = index === 0 ? "lg:col-start-2" : "lg:col-start-3";
          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg ${colStartClass}`}
            >
              <div
                className="block w-full cursor-pointer"
                onClick={() => handleImageClick(index)}
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
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{img.title}</h3>
                    <p className="text-xs text-slate-600">{img.description}</p>
                  </div>
                  <button
                    onClick={() => handleImageClick(index)}
                    className="ml-3 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
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
      {showModal && activeImageSet.length > 0 && (
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

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 rounded-full bg-white/90 p-2 text-slate-800 shadow transition hover:bg-white"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Navigation */}
            {activeImageSet.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow transition hover:bg-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow transition hover:bg-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {activeImageSet.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Media;
