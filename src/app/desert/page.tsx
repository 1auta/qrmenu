import { ButtonBack } from "@/common/ButtonBack";
import Link from "next/link";
import { ButtonNav } from "@/common/ButtonNav";
import { CardListDesert } from "@/common/CardLists/CardListDesert";
import { BurgerMenu } from "@/common/Burger";

export default function Desert() {
  return (
    <>
      <div className="flex justify-between px-4">
        <ButtonBack>
          <Link href="/">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        </ButtonBack>
        <BurgerMenu />
      </div>
      <div>
        <p className="text-center text-2xl text-gray-500">Меню десертів</p>
        <div className="w-48 bg-gray-400 h-[1px] mx-auto "></div>
      </div>
      <div className=" flex gap-2 text-sm mt-3">
        <ButtonNav>
          Тістечко
        </ButtonNav>
        <ButtonNav>
          Макарони
        </ButtonNav>
        <ButtonNav>
          Еклери
        </ButtonNav>
      </div>
      <CardListDesert />
    </>
  );
}
