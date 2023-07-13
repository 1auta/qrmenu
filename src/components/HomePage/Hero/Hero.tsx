import { Container } from "@/common/Container";
import BubbleTea from "./static/BubbleTea.svg";
import Taco from "./static/taco.svg";
import Image from "next/image";
import Coffe from "./static/Coffe.svg";
import Cake from "./static/Shortcake.svg"
import Alcohol from "./static/TropicalDrink.svg"

export function Hero() {
  return (
    <section>
      <Container>
        <div className="">
          <div>
            <p className="text-2xl">Velvet</p>
            <p className="text-slate-400 text-sm">Кавʼярня</p>
          </div>
          <div className="text-xs">
            <div className="flex">
                <Image src={Taco} alt="Taco" width={30}/>
              <p className="ml-1 my-auto">Крафтове меню</p>
            </div>
            <div className="flex">
              <Image src={BubbleTea} alt="bubbletea" width={30} />
              <p className="ml-1 my-auto">Холодні напої</p>
            </div>
            <div className="flex">
                <Image src={Coffe} alt="Coffe" width={30}/>
              <p className="ml-1 my-auto">Гарячі напої</p>
            </div>
            {/* <div className="flex">
                <Image src={Cake} alt="Cake" width={30}/>
              <p className="ml-1 my-auto">Десерти</p>
            </div> */}
            <div className="flex">
                <Image src={Alcohol} alt="Alcohol" width={30}/>
              <p className="ml-1 my-auto">Алкогольні коктелі</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
