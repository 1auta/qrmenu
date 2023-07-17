import { Hero } from "./Hero/Hero";
import { SelectMenu } from "./SelectMenu/SelectMenu";
import { Info } from "./Info/Info";
import { Slider } from "@/common/Slider/Slider";

export function HomePage() {
  return (
    <>
      <Slider />
      <Hero />
      <SelectMenu />
      <Info />
    </>
  );
}
