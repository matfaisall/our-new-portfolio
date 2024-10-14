"use client";
import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import { TypeAnimation } from "react-type-animation";
// import TitleSection from "@/elements/title-section";
// import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const typeSequence = [
    "I'm a Frontend Developer",
    1000,
    "I'am a UI/UX Designer",
    1000,
  ];

  return (
    <div
      className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-full ease-in duration-300 `}
    >
      <NavigationBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section
        className="container flex flex-col justify-center mx-auto"
        style={{ height: "calc(100vh - 96px" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Muhammad Faisal</h1>
        <TypeAnimation
          sequence={typeSequence}
          repeat={Infinity}
          wrapper="span"
          className="text-xl md:text-2xl"
          // speed={{ type: "keyStrokeDelayInMs", value: 250 }}
        />
      </section>

      {/* Services Section */}
      {/* <section className="container mx-auto h-screen">
        <TitleSection
          section="Services"
          title="Expartise Services! Let's chack it out!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  width={500}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  width={500}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card hover:bg-base-100 image-full shadow-xl">
              <figure>
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  width={500}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
