import { Hero } from "./Hero/Hero";
import { SelectMenu } from "./SelectMenu/SelectMenu";
import { Info } from "./Info/Info";


export function HomePage() {
  return (
    <>
    
      <Hero />
        <SelectMenu />
        <Info/>
    </>
  );
}
