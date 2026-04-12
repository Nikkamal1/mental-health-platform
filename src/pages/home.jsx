import React from "react";
import heroImage from "../assets/img-home/h1.jpeg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <section className="hero">
        <img
          src={heroImage}
          alt="Hero Banner"
          className="w-full h-screen object-cover"
        />
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
