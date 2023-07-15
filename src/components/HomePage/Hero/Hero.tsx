import { Container } from "@/common/Container";
import Image from "next/image";
import BubbleTea from "./static/BubbleTea.svg";
import Taco from "./static/taco.svg";
import Alcohol from "./static/TropicalDrink.svg";

export function Hero() {
  return (
    <section>
      <Container>
        <div className="p">
          <div>
            <p className="text-2xl">Velvet</p>
            <p className="text-slate-400 text-sm">Кавʼярня</p>
          </div>
          <div className="text-sm py-5">
            <div className="flex">
              <Image src={Taco} alt="Taco" width={30} />
              <p className="ml-1 my-auto ">Крафтове меню</p>
            </div>
            <div className="flex">
              <Image src={BubbleTea} alt="bubbletea" width={30} />
              <p className="ml-1 my-auto">Холодні та гарячі напої</p>
            </div>
            <div className="flex">
              <Image src={Alcohol} alt="Alcohol" width={30} />
              <p className="ml-1 my-auto">Алкогольні коктелі</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
