import Bar1 from "@/app/bar/static/bar1.webp";
import Bar2 from "@/app/bar/static/bar2.webp";
import Bar3 from "@/app/bar/static/bar3.webp";
import Bar4 from "@/app/bar/static/bar4.webp";
import Bar5 from "@/app/bar/static/bar5.webp";
import Bar6 from "@/app/bar/static/bar6.webp";
import Bar7 from "@/app/bar/static/bar7.webp";
import Bar8 from "@/app/bar/static/bar8.webp";

export type ColdDrinks = {
  image: string;
  title: string;
  text: string;
  price: number;
};

export const coldDrinksData: ColdDrinks[] = [
  {
    image: Bar5.src,
    title: "Темна карамель",
    text: "Склад: сік апельсиновий, сік лимонний, сироп полуничний",
    price: 70,
  },
  {
    image: Bar1.src,
    title: "Айс какао",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний",
    price: 60,
  },
  {
    image: Bar2.src,
    title: "Айс раф",
    text: "Склад: імбирний сироп, сік лимонний, сік манговий, 7up",
    price: 40,
  },
  {
    image: Bar3.src,
    title: "Шоколадний шейк",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний",
    price: 65,
  },
  {
    image: Bar7.src,
    title: "Манговий лимонад",
    text: "Склад: імбирний сироп, сік лимонний, сік манговий, 7up",
    price: 40,
  },
  {
    image: Bar4.src,
    title: "Цитрусовий лимонад",
    text: "Склад: мʼята, сироп імбирний, сироп цукровий, сік лимонний",
    price: 65,
  },
  {
    image: Bar6.src,
    title: "Тропічний лимонад",
    text: "Склад: сік апельсиновий, сік лимонний, сік манговий, сироп полуничний",
    price: 70,
  },
  
  {
    image: Bar8.src,
    title: "Лимонад вишневий",
    text: "Склад: мʼята, сироп вишневий, сироп цукровий, сік лимонний",
    price: 60,
  },
];