import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/img-media/m1.jpeg";
import heroImage2 from "../assets/img-media/m2.jpeg";
import heroImage3 from "../assets/img-d2/d5.jpeg";

function MediaCard({ img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-100 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
      {/* Image */}
      <Link to={img.link} className="block w-full cursor-pointer">
        <div className="relative w-full overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 transition-transform duration-500 ease-out group-hover:translate-y-0">
              <h3 className="text-lg font-bold mb-1 leading-snug">{img.title}</h3>
              <p className="text-sm opacity-80">{img.description}</p>
            </div>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <div className="px-5 py-4 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-800 mb-0.5 truncate">{img.title}</h3>
          <p className="text-xs text-slate-500 truncate">{img.description}</p>
        </div>
        <Link
          to={img.link}
          className="shrink-0 rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-out hover:bg-slate-700 hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

function Media() {
  const images = [
    {
      src: heroImage,
      alt: "Media image 1",
      title: "",
      description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
      link: "/detail1",
      position: "top-left",
    },
    {
      src: heroImage2,
      alt: "Media image 2",
      title: "",
      description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
      link: "/detail2",
      position: "top-right",
    },
    // {
    //   src: heroImage3,
    //   alt: "Media image 3",
    //   title: "",
    //   description: "คลิกเพื่อดูรายละเอียดเพิ่มเติม",
    //   link: "/detail3",
    //   position: "bottom-center",
    // },
  ];

  const topImages = images.filter((img) => img.position !== "bottom-center");
  const bottomImage = images.find((img) => img.position === "bottom-center");

  return (
    <div className="p-6 sm:p-6 lg:p-12 max-w-6xl mx-auto space-y-8">
      {/* แถวบน */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {topImages.map((img, index) => (
          <MediaCard key={index} img={img} />
        ))}
      </div>

      {/* แถวล่าง กลาง */}
      {bottomImage && (
        <div className="flex justify-center">
          <div className="w-full max-w-[calc(50%-1rem)]">
            <MediaCard img={bottomImage} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Media;