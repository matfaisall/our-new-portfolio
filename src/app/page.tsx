"use client";
import React, { useState } from "react";
import NavigationBar from "@/components/navigation-bar";
import TitleSection from "@/elements/title-section";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { textMarqueeRightSide, textMarqueeLeftSide } from "@/utils/constant/text-marquee";
import { typeSequence } from "@/utils/constant/type-sequence";
import CardServices from "@/components/card-services";
import { myServices } from "@/utils/constant/my-services";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-full ease-in duration-300 `}>
      <NavigationBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section
        className="container flex flex-col justify-center mx-auto relative gap-2"
        style={{ height: "calc(100vh - 96px" }}
        id="HeroSection"
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

      <section className="container mx-auto h-screen" id="MySkills">
        <TitleSection title="Technical Skills" />
        <div className="w-full h-42 relative flex flex-col items-center justify-center gap-8">
          <Marquee direction="left" speed={120}>
            {textMarqueeRightSide.map((item, index) => (
              <div className="flex gap-10" key={index}>
                <div className="card w-48 h-48">
                  <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
                    <Image src={item.icon} alt={`Icon ${item.text}`} width={84} height={84} />
                    <h2 className="text-xl text-bold">{item.text}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          <Marquee direction="right" speed={120}>
            {textMarqueeLeftSide.map((item, index) => (
              <div className="flex gap-10" key={index}>
                <div className="card w-48 h-48">
                  <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
                    <Image src={item.icon} alt={`Icon ${item.text}`} width={84} height={84} />
                    <h2 className="text-xl text-bold">{item.text}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* My Services Section */}
      <section className="container mx-auto h-screen" id="MyServices">
        <TitleSection title="My Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {myServices.map((item, index) => (
            <CardServices key={index} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>
    </div>
  );
}
