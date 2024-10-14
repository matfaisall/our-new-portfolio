import React from "react";

export interface SideBlurOverlayInterface {
  isDarkMode: boolean;
}

const SideBlurOverlay: React.FC<SideBlurOverlayInterface> = ({
  isDarkMode,
}) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-full w-36 bg-white blur-3xl z-50 ease-in duration-300`}
      ></div>

      <div className="absolute top-0 right-0 h-full w-36 bg-purple-500 blur-3xl z-20 ease-in duration-300"></div>
    </>
  );
};

export default SideBlurOverlay;
