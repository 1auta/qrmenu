import Breakfast from "@/app/kitchen/static/breakfast.jpeg";
import Breakfast1 from "@/app/kitchen/static/breakfast1.png";
import Breakfast2 from "@/app/kitchen/static/breakfast2.png";
import Breakfast3 from "@/app/kitchen/static/breakfast3.png";
import Breakfast7 from "@/app/kitchen/static/breakfast7.jpeg";
import Breakfast8 from "@/app/kitchen/static/breakfast8.png";
import Breakfast10 from "@/app/kitchen/static/breakfast10.png";
import Breakfast11 from "@/app/kitchen/static/breakfast11.png";
import Breakfast12 from "@/app/kitchen/static/breakfast12.jpeg";
import Breakfast13 from "@/app/kitchen/static/breakfast13.jpeg";
import Breakfast14 from "@/app/kitchen/static/breakfast14.png";
import Breakfast15 from "@/app/kitchen/static/breakfast15.jpeg";
import Breakfast16 from "@/app/kitchen/static/breakfast16.jpeg";
import Breakfast17 from "@/app/kitchen/static/breakfast17.jpeg";
import Breakfast18 from "@/app/kitchen/static/breakfast18.jpeg";

export type Kitchen = {
  image: string;
  title: string;
  text: string;
  price: number;
  fulltext?: string;
};

export const kitchenData: Kitchen[] = [
  {
    image: Breakfast.src,
    title: "Французький сніданок",
    text: "Мікс салату, авокадо, кіноа, яйця пашот, цільнозернова грінка ...",
    price: 200,
    fulltext:
      "Мікс салату, авокадо, кіноа, яйця пашот, цільнозернова грінка, грецький йогурт, лосось/індичка (шинка) власного приготування",
  },
  {
    image: Breakfast1.src,
    title: "Тост з ростбіфом",
    text: "Печений перець, соус Тонато, каперси, мікс салату",
    price: 260,
    fulltext: "Печений перець, соус Тонато, каперси, мікс салату",
  },
  {
    image: Breakfast2.src,
    title: "Авокадо тост",
    text: "томатне варення, томати Черрі, оливки Таджаскі, свіжа зелень ...",
    price: 240,
    fulltext:
      "Томатне варення, томати Черрі, оливки Таджаскі, свіжа зелень, азіатський соус",
  },
  {
    image: Breakfast3.src,
    title: "Сендвіч з лососем",
    text: "цільнозернова грінка, крем-сир, листя салату, рукола ...",
    price: 265,
    fulltext:
      "Цільнозернова грінка, крем-сир, листя салату, рукола, авокадо, огірок, лосось, кунжут, соус Теріякі",
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
    image: Breakfast13.src,
    title: "Гранола власного приготування",
    text: "ягоди можуть змінюватись по сезону",
    price: 80,
    fulltext: "ягоди можуть змінюватись по сезону",
  },
  {
    image: Breakfast14.src,
    title: "Вівсяна каша із свіжими ягодами",
    text: "ягоди можуть змінюватись по сезону",
    price: 70,
    fulltext: "ягоди можуть змінюватись по сезону",
  },
  {
    image: Breakfast15.src,
    title: "Вівсяна каша з в'яленим персиком",
    text: "ягоди можуть змінюватись по сезону",
    price: 90,
    fulltext: "ягоди можуть змінюватись по сезону",
  },
  {
    image: Breakfast16.src,
    title: "Сирнички зі сметаною",
    text: "сир, сметана, полуничний (абрикосовий) джем, ягоди ...",
    price: 160,
    fulltext: "ягоди можуть змінюватись по сезону",
  },
  {
    image: Breakfast17.src,
    title: "Сирнички з бананом",
    text: "сир, банан, солена карамель, арахіс, соус, джем",
    price: 180,
    fulltext: "сир, банан, солена карамель, арахіс, соус, джем",
  },
  {
    image: Breakfast18.src,
    title: "Сирнички з чорничним соусом",
    text: "сир, чорничний соус, сметанковий крем, малинова пудра ...",
    price: 160,
    fulltext:
      "сир, чорничний соус, сметанковий крем, малинова пудра та свіжа м‘ята",
  },
];
