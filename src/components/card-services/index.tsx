import React from "react";
import Image from "next/image";
import { CardServicesIntervace } from "./CardServicesIntervace";

const CardServices: React.FC<CardServicesIntervace> = ({ key, icon, title, desc }) => {
  return (
    <div
      key={key}
      className={`card rounded-md p-4  border border-transparent hover:border-2 hover:border-gray-600 ease-in duration-200 cursor-pointer`}
    >
      <div className="flex gap-4">
        <Image src={icon} alt={title} width={84} height={84} />

        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-bold">{title}</h1>
          <p className="text-sm text-semibold">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
