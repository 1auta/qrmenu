import { Container } from "@/common/Container";
import Image from "next/image";
import BubbleTea from "./static/BubbleTea.svg";
import Taco from "./static/taco.svg";
import Alcohol from "./static/TropicalDrink.svg";

export function Hero() {
  return (
    <section>
      <Container>
        <div>
          <div>
            <p className="text-2xl">1auta</p>
            <p className="text-slate-400 text-sm">Кавʼярня</p>
          </div>
          <div className="text-sm my-2">
            <div className="flex">
              <Image src={Taco} alt="Taco" width={20} />
              <p className="ml-1 my-auto ">Крафтове меню</p>
            </div>
            <div className="flex">
              <Image src={BubbleTea} alt="bubbletea" width={20} />
              <p className="ml-1 my-auto">Холодні та гарячі напої</p>
            </div>
            <div className="flex">
              <Image src={Alcohol} alt="Alcohol" width={20} />
              <p className="ml-1 my-auto">Алкогольні коктелі</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
