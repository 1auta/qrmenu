"use client";

import { ButtonBack } from "@/common/ButtonBack";
import Link from "next/link";
import { BurgerMenu } from "@/common/Burger";
import { ColdDrinksList } from "@/common/CardLists/CardListBar/ColdDrinks";
import { TeaList } from "@/common/CardLists/CardListBar/Tea";
import { ButtonNav } from "@/common/ButtonNav";
import { Link as ScrollLink } from "react-scroll";
import { ButtonUp } from "@/common/ButtonUp";

export default function Bar() {
  return (
    <>
      <div>
        <div className="flex justify-between px-4">
          <ButtonBack>
            <Link href="/">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
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
      </div>
      <div>
        <p className="text-center text-2xl text-gray-500">Меню бару</p>
        <div className="w-36 bg-gray-400 h-[1px] mx-auto "></div>
      </div>
      <div className="flex gap-2 px-2 mt-2 justify-center  sm:flex-row">
        <ButtonNav>
          <ScrollLink to="cold" smooth={true} duration={500}>
            Холодні напої
          </ScrollLink>
        </ButtonNav>
        <ButtonNav>
          <ScrollLink to="tea" smooth={true} duration={500}>
            Чаї
          </ScrollLink>
        </ButtonNav>
        <ButtonNav>
          <ScrollLink to="teaForSale" smooth={true} duration={500}>
            На продаж
          </ScrollLink>
        </ButtonNav>
      </div>
      <div>
        <div id="cold">
          <p className="text-center text-2xl text-gray-500 mt-3 md:mt-7 ">
            Холодні напої
          </p>
          <ColdDrinksList />
          {/* <div className=" bg-black h-[1px] mx-auto "></div> */}
        </div>
        <div id="tea">
          <p className="text-center text-2xl text-gray-500 mt-3 md:mt-7">Чаї</p>
          <TeaList />
          {/* <div className=" bg-black h-[1px] mx-auto "></div> */}
        </div>
        <div id="teaForSale">
          <p className="text-center text-2xl text-gray-500 mt-3 md:mt-7 ">
            Чаї на продаж
          </p>
          <TeaList />
        </div>
        <ButtonUp/>
      </div>
    </>
  );
}
