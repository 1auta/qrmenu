import cake from "@/app/desert/static/cake.png"
import cake1 from "@/app/desert/static/cake1.png"
import cake2 from "@/app/desert/static/cake2.png"
import cake4 from "@/app/desert/static/cake4.png"
import cake5 from "@/app/desert/static/cake5.png"
import cake6 from "@/app/desert/static/cake6.png"

export type Cake = {
    image: string;
    title: string;
    text: string;
    price: number;
    fulltext?: string;
    id?: string;
  };

export const cakeData: Cake[] = [
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
]