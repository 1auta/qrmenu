import Breakfast from "@/app/kitchen/static/breakfast.jpeg";
import Breakfast7 from "@/app/kitchen/static/breakfast7.jpeg";
import Breakfast8 from "@/app/kitchen/static/breakfast8.png";
import Breakfast10 from "@/app/kitchen/static/breakfast10.png";
import Salty from "@/app/kitchen/static/salty.jpeg";
import Salty1 from "@/app/kitchen/static/salty1.png";
import Salty2 from "@/app/kitchen/static/salty2.jpeg";
import Salty3 from "@/app/kitchen/static/salty3.jpeg";
import Salty4 from "@/app/kitchen/static/salty4.png";
import Salty5 from "@/app/kitchen/static/salty5.jpeg";

export type SaltyBreakfast = {
  image: string;
  title: string;
  text: string;
  price: number;
  fulltext?: string;
  id?: string;
};

export const saltyData: SaltyBreakfast[] = [
  {
    image: Breakfast.src,
    title: "Французький сніданок",
    text: "Мікс салату, авокадо, кіноа, яйця пашот, цільнозернова грінка ...",
    price: 200,
    fulltext:
      "Мікс салату, авокадо, кіноа, яйця пашот, цільнозернова грінка, грецький йогурт, лосось/індичка (шинка) власного приготування",
  },

  {
    image: Breakfast7.src,
    title: "Яйця пашот із соусом",
    text: "яйця пашот, соус Hollandaise, шинка, круасан класичний",
    price: 140,
    fulltext: "яйця пашот, соус Hollandaise, шинка, круасан класичний",
  },
  {
    image: Breakfast8.src,
    title: "Скрамбл",
    text: "хліб на заквасці з журавлиною, крем-сир, мікс салату, томати Черрі ...",
    price: 165,
    fulltext:
      "хліб на заквасці з журавлиною, крем-сир, мікс салату, томати Черрі в основу скрамбла входить: три яйця, вершки",
  },
  {
    image: Breakfast10.src,
    title: "Сніданок TLV",
    text: "яєчня, хумус, мікс салату з томатами Черрі, індичка власного ...",
    price: 170,
    fulltext:
      "яєчня, хумус, мікс салату з томатами Черрі, індичка власного виробництва Daily Dose / крафтова шинка, грінка пшеничн",
  },
  {
    image: Salty.src,
    title: "Скрамбл з беконом",
    text: "томати Черрі гриль, грінка пшеничного хліба, мікс салату в ...",
    price: 210,
    fulltext:
      "томати Черрі гриль, грінка пшеничного хліба, мікс салату в основу скрамбла входить: два яйця, вершки",
  },
  {
    image: Salty1.src,
    title: "Омлет з томатним соусом",
    text: "грінка пшеничного хліба, мікс салату, томати Черрі в основу ом ...",
    price: 180,
    fulltext:
      "грінка пшеничного хліба, мікс салату, томати Черрі в основу омлету входить: три яйця, сир Моцарелла, томатний соус",
  },
  {
    image: Salty2.src,
    title: "Зелений боул з яйцем пашот",
    text: "яйце пашот, кіноа, авокадо, броколі, мигдаль, печений перець ...",
    price: 200,
    fulltext:
      "яйце пашот, кіноа, авокадо, броколі, мигдаль, печений перець, стручкова квасоля, мікс салату, мигдалево-м’ятний соус власного приготування",
  },
  {
    image: Salty3.src,
    title: "Великий зелений салат",
    text: "авокадо, кіноа, томати Черрі, яблуко, пармезан, мікс салатa",
    price: 165,
    fulltext: "авокадо, кіноа, томати Черрі, яблуко, пармезан, мікс салату",
  },
];
