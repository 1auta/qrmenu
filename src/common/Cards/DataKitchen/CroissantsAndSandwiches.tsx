import Breakfast1 from "@/app/kitchen/static/breakfast1.png";
import Breakfast3 from "@/app/kitchen/static/breakfast3.png";
import Breakfast11 from "@/app/kitchen/static/breakfast11.png";
import Breakfast12 from "@/app/kitchen/static/breakfast12.jpeg";

export type CroissantAndSandwitch = {
  image: string;
  title: string;
  text: string;
  price: number;
  fulltext?: string;
  id?: string;
};

export const croissantData: CroissantAndSandwitch[] = [
  {
    image: Breakfast3.src,
    title: "Сендвіч з лососем",
    text: "цільнозернова грінка, крем-сир, листя салату, рукола ...",
    price: 265,
    fulltext:
      "Цільнозернова грінка, крем-сир, листя салату, рукола, авокадо, огірок, лосось, кунжут, соус Теріякі",
  },
  {
    image: Breakfast11.src,
    title: "Круасан з мортаделою",
    text: "класичний круасан, мортадела, страчателла ...",
    price: 160,
    fulltext:
      "класичний круасан, мортадела, страчателла, в’ялені томати, помідоровий джем, рукола, бальзамічний соус, фісташка",
  },
  {
    image: Breakfast12.src,
    title: "Сендвіч з ов. та індичкою",
    text: "індичка власного приготування Daily Dose, мікс салату ...",
    price: 160,
    fulltext:
      "індичка , мікс салату, редиска, кунжут в основу сендвіча входить: печений перець, томлений шпинат, крем-сир, пікантний соус",
  },
  {
    image: Breakfast1.src,
    title: "Тост з ростбіфом",
    text: "Печений перець, соус Тонато, каперси, мікс салату",
    price: 260,
    fulltext: "Печений перець, соус Тонато, каперси, мікс салату",
  },
];
