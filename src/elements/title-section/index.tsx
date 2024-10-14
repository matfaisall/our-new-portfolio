import React from "react";

interface TitleSectionProps {
  section?: string;
  title?: string;
  desc?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  section = "",
  title = "",
  desc = "",
}) => {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-xl font-semibold text-green-700 uppercase">
          {section || ""}
        </h1>
        <h4 className="text-3xl font-semibold ">{title || ""}</h4>
        <p>{desc || ""}</p>
      </div>
    </div>
  );
};

export default TitleSection;
