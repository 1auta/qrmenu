import { Container } from "@/common/Container";
import Image from "next/image";
import WiFi from "./static/WiFi.png";
import Clock from "./static/clock.png";
import Maps from "./static/maps.png";

export function Info() {
  return (
    <div>
      <Container>
        <div>
          <div className="my-3">
            <div className="flex gap-3">
              <div className="my-auto bg-slate-100 p-3">
                <Image src={WiFi} alt="WifiIcon" width={30} />
              </div>
              <div>
                <p className="text-lg text-gray-400">WiFi:</p>
                <p>Velvet2023</p>
              </div>
            </div>
            <div className="flex gap-3 my-3">
              <div className="my-auto bg-slate-100 p-3">
                <Image src={Clock} alt="ClockIcon" width={30} />
              </div>
              <div>
                <p className="text-lg text-gray-400">Робочий час:</p>
                <p>10:00-22:00</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="my-auto bg-slate-100 p-3 ">
                <Image src={Maps} alt="MapsIcon" width={30} />
              </div>
              <div>
                <p className="text-lg text-gray-400">Адреса</p>
                <p>вулиця Огієнка, 46</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 ">
            <p className="text-xl font-bold mb-1">Де ми знаходимось</p>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.324344762784!2d26.584298476438192!3d48.68016317130853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733b875cfd371e9%3A0x88678146658dda26!2z0YPQuy4g0J7Qs9C40LXQvdC60L4sIDQ1LCDQmtCw0LzQtdC90LXRhi3Qn9C-0LTQvtC70YzRgdC60LjQuSwg0KXQvNC10LvRjNC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMzIzMDE!5e0!3m2!1sru!2sua!4v1689425776116!5m2!1sru!2sua"
                width="330" 
                height="330"
                loading="lazy"
                className="lg:w-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
