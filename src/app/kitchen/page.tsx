"use client";

import { ButtonBack } from "@/common/ButtonBack";
import Link from "next/link";
import { BurgerMenu } from "@/common/Burger";
import { ButtonNav } from "@/common/ButtonNav";
import { CroissantAndSandwitchList } from "@/common/CardLists/CardListKitchen/CroissantAndSandwitch";
import { SaltyBreakfastList } from "@/common/CardLists/CardListKitchen/SaltyBreakfast";
import { SweetBreakfastList } from "@/common/CardLists/CardListKitchen/SweetBreakfast";
import { Link as ScrollLink } from "react-scroll";
import { ButtonUp } from "@/common/ButtonUp";

export default function Kitchen  ()  {
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
        <p className="text-center text-2xl text-gray-500">Меню сніданків</p>
        <div className="w-44 bg-gray-400 h-[1px] mx-auto "></div>
      </div>
      <div className="flex gap-2 px-2 mt-2 justify-center  sm:flex-row">
        <ButtonNav>
          <ScrollLink to="salt" smooth={true} duration={500}>
            Солоні
          </ScrollLink>
        </ButtonNav>
        <ButtonNav>
          <ScrollLink to="croissant" smooth={true} duration={500}>
            Круасани та тости
          </ScrollLink>
        </ButtonNav>
        <ButtonNav>
          <ScrollLink to="sweet" smooth={true} duration={500}>
            Солодкі
          </ScrollLink>
        </ButtonNav>
      </div>
      <div>
        <div id="salt">
          <p className="text-center text-2xl text-gray-500 mt-3 ">
            Солоні сніданки
          </p>
          <SaltyBreakfastList />
          {/* <div className=" bg-black h-[1px] mx-auto "></div> */}
        </div>
        <div id="croissant">
          <p className="text-center text-2xl text-gray-500 mt-3">
            Круасани та тости
          </p>
          <CroissantAndSandwitchList />{" "}
          {/* <div className=" bg-black h-[1px] mx-auto "></div> */}
        </div>
        <div id="sweet">
          <p className="text-center text-2xl text-gray-500 mt-3 ">
            Солодкі сніданки
          </p>
          <SweetBreakfastList />{" "}
        </div>
      </div>
      <ButtonUp />
    </>
  );
};

