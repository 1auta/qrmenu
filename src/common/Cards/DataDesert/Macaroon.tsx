import macaron from "@/app/desert/static/macaron.jpeg";
import macaron1 from "@/app/desert/static/macaron1.jpeg";
import macaron2 from "@/app/desert/static/macaron2.png";
import macaron3 from "@/app/desert/static/macaron3.png";
import macaron4 from "@/app/desert/static/macaron4.png";
import macaron5 from "@/app/desert/static/macaron5.jpeg";
import macaron6 from "@/app/desert/static/macaron6.jpeg";
import macaron7 from "@/app/desert/static/macaron7.png";

export type Macaron = {
  image: string;
  title: string;
  text: string;
  price: number;
  fulltext?: string;
  id?: string;
};

export const macaronData: Macaron[] = [
  {
    image: macaron4.src,
    title: "Макарон Кокос-Ананас",
    text: "",
    price: 70,
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
];
