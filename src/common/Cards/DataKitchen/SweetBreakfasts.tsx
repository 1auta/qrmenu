import Breakfast13 from "@/app/kitchen/static/breakfast13.jpeg";
import Breakfast14 from "@/app/kitchen/static/breakfast14.png";
import Breakfast15 from "@/app/kitchen/static/breakfast15.jpeg";
import Breakfast16 from "@/app/kitchen/static/breakfast16.jpeg";
import Breakfast17 from "@/app/kitchen/static/breakfast17.jpeg";
import Breakfast18 from "@/app/kitchen/static/breakfast18.jpeg";
import Sweet from "@/app/kitchen/static/sweet.png"
import Sweet1 from "@/app/kitchen/static/sweet1.png"

export type SweetBreakfast = {
    image: string;
    title: string;
    text: string;
    price: number;
    fulltext?: string;
    id?: string;
  };
  
  export const sweetData: SweetBreakfast[] = [
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
      {
        image: Sweet.src,
        title: "Млинці з ванільним соусом",
        text: "три млинці, свіжі ягоди, ванільний соус ...",
        price: 180,
        fulltext: "три млинці, свіжі ягоди, ванільний соус *ягоди можуть змінюватись по сезону",
      },
      {
        image: Sweet1.src,
        title: "Млинці з сиром",
        text: "ягоди можуть змінюватись по сезону",
        price: 120,
        fulltext: "ягоди можуть змінюватись по сезону",
      },
  ]