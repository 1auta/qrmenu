import Tea from "@/app/bar/static/tea.png";
import Tea1 from "@/app/bar/static/tea1.png";
import Tea2 from "@/app/bar/static/tea2.png";
import Tea3 from "@/app/bar/static/tea3.png";
import Tea4 from "@/app/bar/static/tea4.png";
import Tea5 from "@/app/bar/static/tea5.jpeg";
import Tea6 from "@/app/bar/static/tea6.png";
import Tea7 from "@/app/bar/static/tea7.png";

export type Tea = {
  image: string;
  title: string;
  text: string;
  price: number;
  fulltext: string;
};

export const teaData: Tea[] = [
  {
    image: Tea.src,
    title: "Суміш чаїв ББ Детокс",
    text: "700 мл",
    price: 70,
    fulltext:
      "має аромат цитрусових та квітів, смак з характерною цитрусовою кислинкою, країна походження: Франція",
  },
  {
    image: Tea1.src,
    title: "Чай Ханібуш",
    text: "700 мл",
    price: 60,
    fulltext:
      "чай володіє м’яким cмаком, з фруктовим ароматом, що нагадує фруктові льодяники, походження: Париж",
  },
  {
    image: Tea2.src,
    title: "Білий чай Puerh Bai Ya",
    text: "700 мл",
    price: 40,
    fulltext:
      "смак без терпкості, відчувається в’язкість і тривалий солодкий післясмак країна походження: Китай",
  },
  {
    image: Tea3.src,
    title: "Зелений чай Thai Nguen",
    text: "700 мл",
    price: 65,
    fulltext:
      "легкий, освіжаючий, з ароматом смородинового листя та молодої кукурудзи країна походження: В’єтнам",
  },
  {
    image: Tea4.src,
    title: "Чай улун «Молочний улун»",
    text: "700 мл",
    price: 80,
    fulltext: "з ідеальними рівними листям і дивовижним молочним ароматом країна походження: Китай",
  },
  {
    image: Tea6.src,
    title: "Чай карпатський мʼятний",
    text: "700 мл",
    price: 65,
    fulltext: "квіти ромашки, трава м’яти, іван-чай, смородина",
  },
  {
    image: Tea6.src,
    title: "Чай карпатський ромашковий",
    text: "700 мл",
    price: 70,
    fulltext: "квіти ромашки, трава м’яти, іван-чай",
  },

  {
    image: Tea7.src,
    title: "Чай карпатський ягідний",
    text: "700 мл",
    price: 60,
    fulltext: "плоди шипшини, глоду, бузини, смородини, горобини, аронії",
  },
];
