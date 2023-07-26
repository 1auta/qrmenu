import { ButtonBack } from "@/common/ButtonBack";
import Link from "next/link";
import { CardListKitchen } from "@/common/CardLists/CardListKitchen";
import { BurgerMenu } from "@/common/Burger";

export default function Kitchen() {
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
        <p className="text-center text-2xl text-gray-500">Меню кухні</p>
        <div className="w-36 bg-gray-400 h-[1px] mx-auto "></div>
      </div>
      <CardListKitchen />
    </>
  );
}
