import {
  CirclesFour,
  Sun,
  Moon,
  CompassRose,
  DownloadSimple,
} from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { INavigationBar } from "./NavigationInterface";

const NavigationBar: React.FC<INavigationBar> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.classList.add(
        prefersDarkMode ? "dark" : "light"
      );
    }
  }, [setIsDarkMode]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.remove(isDarkMode ? "dark" : "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("thame", newTheme);
  };

  const handleViewCV = () => {
    const link = document.createElement("a");
    link.href = `/doc/muhammad-faisal's-cv.pdf`;
    link.target = "_blank";
    // link.download = "muhammad-faisal's-cv.pdf";
    link.click();
  };

  return (
    <div
      className={`navbar sticky min-h-24 top-0 z-50 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} ease-in duration-300 `}
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div>
          <Link
            href="/"
            className="flex gap-2 items-center text-xl font-medium"
          >
            <CompassRose size={32} /> My Portfolio
          </Link>
        </div>

        <div className="flex flex-row gap-4 md:gap-8 items-center">
          <button className="btn btn-active btn-ghost" onClick={handleViewCV}>
            <DownloadSimple size={22} weight="fill" />
            <p className="text-sm  hidden md:block">View CV</p>
          </button>
          <div onClick={toggleTheme}>
            {isDarkMode ? (
              <Sun
                size={32}
                style={{ cursor: "pointer" }}
                className="transform transition-transform duration-400 hover:rotate-90"
              />
            ) : (
              <Moon
                size={32}
                style={{ cursor: "pointer" }}
                className="transform transition-transform duration-400 hover:-rotate-90"
              />
            )}
          </div>
          <CirclesFour
            size={32}
            style={{ cursor: "pointer" }}
            className="transform transition-transform duration-400 hover:rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
