"use client";

import { ButtonBack } from "@/common/ButtonBack";
import Link from "next/link";
import { ButtonNav } from "@/common/ButtonNav";
import { BurgerMenu } from "@/common/Burger";
import { MacaronList } from "@/common/CardLists/CardListDesert/Macaron";
import { CakeList } from "@/common/CardLists/CardListDesert/Cake";
import { animateScroll as scroll } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { ButtonUp } from "@/common/ButtonUp";



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
      <div className="flex gap-2 px-2 mt-2 justify-center  sm:flex-row">
        <ButtonNav>
          <ScrollLink to="cake" smooth={true} duration={500}>
            Тістечка
          </ScrollLink>
        </ButtonNav>
        <ButtonNav>
          <ScrollLink to="macaroon" smooth={true} duration={500}>
            Макарони
          </ScrollLink>
        </ButtonNav>
        <ButtonNav>
          <ScrollLink to="ecler" smooth={true} duration={500}>
            Еклери
          </ScrollLink>
        </ButtonNav>
      </div>
      <div>
        <div id="cake" >
          <p className="text-center text-2xl text-gray-500 mt-3">Тістечко</p>
          <CakeList />
        </div>
        <div id="macaroon" >
          <p className="text-center text-2xl text-gray-500 mt-3">Макарони</p>
          <MacaronList />
        </div>
        <div id="ecler" >
          <p className="text-center text-2xl text-gray-500 mt-3">Еклери</p>
          <CakeList />
        </div>
      </div>
      <ButtonUp/>
    </>
  );
}
