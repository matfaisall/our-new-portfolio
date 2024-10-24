import { StaticImageData } from "next/image";

export interface CardServicesIntervace {
  key: number;
  icon: string | StaticImageData;
  title: string;
  desc: string;
}
