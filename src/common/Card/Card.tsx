import Bar from "./static/bar.png";
import Bar1 from "./static/bar1.png";
import Bar2 from "./static/bar2.png";
import Bar3 from "./static/bar3.png";

export type Card = {
  image: string;
  title: string;
  text: string;
  price: number;
};

export const cardData: Card[] = [
  {
    image: Bar.src,
    title: "Тропічний рай",
    text: "Склад: сік апельсиновий, сік лимонний, сік манговий, сироп полуничний",
    price: 70,
  },
  {
    image: Bar1.src,
    title: "Лимонад імбирний",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний, вода мінеральна",
    price: 60,
  },
  {
    image: Bar2.src,
    title: "Манговий слінг",
    text: "Склад: імбирний сироп, сік лимонний, сік манговий, 7up",
    price: 40,
  },
  {
    image: Bar3.src,
    title: "Цитрусовий лимонад",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний, вода мінеральна",
    price: 65,
  },
  {
    image: Bar2.src,
    title: "Манговий слінг",
    text: "Склад: імбирний сироп, сік лимонний, сік манговий, 7up",
    price: 40,
  },
  {
    image: Bar3.src,
    title: "Цитрусовий лимонад",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний, вода мінеральна",
    price: 65,
  },
  {
    image: Bar.src,
    title: "Тропічний рай",
    text: "Склад: сік апельсиновий, сік лимонний, сік манговий, сироп полуничний",
    price: 70,
  },
  {
    image: Bar1.src,
    title: "Лимонад імбирний",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний, вода мінеральна",
    price: 60,
  },
];
