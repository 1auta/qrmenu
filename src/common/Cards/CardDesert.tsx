import cake from "@/app/desert/static/cake.png"
import cake1 from "@/app/desert/static/cake1.png"
import cake2 from "@/app/desert/static/cake2.png"
import cake4 from "@/app/desert/static/cake4.png"
import cake5 from "@/app/desert/static/cake5.png"
import cake6 from "@/app/desert/static/cake6.png"
import macaron from "@/app/desert/static/macaron.jpeg"
import macaron1 from "@/app/desert/static/macaron1.jpeg"
import macaron2 from "@/app/desert/static/macaron2.png"
import macaron3 from "@/app/desert/static/macaron3.png"
import macaron4 from "@/app/desert/static/macaron4.png"
import macaron5 from "@/app/desert/static/macaron5.jpeg"
import macaron6 from "@/app/desert/static/macaron6.jpeg"
import macaron7 from "@/app/desert/static/macaron7.png"


export type Desert = {
    image: string;
    title: string;
    text: string;
    price: number;
    fulltext?: string;
    id?:number
  };
  
  export const desertData: Desert[] = [
    {
        image: cake.src,
        title: "Тістечко Ягідна Франжипан",
        text: "",
        price: 70,
      },
      {
        image: cake1.src,
        title: "Тістечко Фісташка-Малина",
        text: "",
        price: 70,
      },
      {
        image: cake2.src,
        title: "Тістечко ягідна Опера",
        text: "",
        price: 70,
      },
      {
        image: cake.src,
        title: "Тістечко чорний ліс",
        text: "",
        price: 70,
      },
      {
        image: cake4.src,
        title: "Тістечко тірамісу",
        text: "",
        price: 70,
      },
      {
        image: cake5.src,
        title: "Тістечко париж",
        text: "",
        price: 70,
      },
      {
        image: cake6.src,
        title: "Тістечко груша",
        text: "",
        price: 70,
      },
      {
        image: macaron4.src,
        title: "Макарон Кокос-Ананас",
        text: "",
        price: 70,
        id: 1
      },
      {
        image: macaron3.src,
        title: "Макарон Манго-Маракуя",
        text: "",
        price: 70,
      },
      {
        image: macaron2.src,
        title: "Макарон Йогурт-Чорниця",
        text: "",
        price: 70,
      },
      {
        image: macaron6.src,
        title: "Макарон Фундук-Ожина",
        text: "",
        price: 70,
      },
      {
        image: macaron4.src,
        title: "Макарон Фісташка-Малина",
        text: "",
        price: 70,
      },
      {
        image: macaron.src,
        title: "Макарон М'ята",
        text: "",
        price: 70,
      },
  ]