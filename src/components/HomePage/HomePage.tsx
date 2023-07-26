import { Hero } from "./Hero/Hero";
import { SelectMenu } from "./SelectMenu/SelectMenu";
import { Info } from "./Info/Info";
import { Slider } from "@/common/Slider/Slider";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Hero />
      <SelectMenu />
      <Info />
      <Footer />
    </>
  );
}
