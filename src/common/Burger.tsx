"use client";
import React, { useState } from "react";
import Link from "next/link";

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    if (typeof document !== "undefined") {
      document.body.classList.add("menu-open");
    }
  };

  const closeNav = () => {
    setIsOpen(false);
    if (typeof document !== "undefined") {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <div>
      <div
        id="mySidenav"
        className={`fixed top-0 left-0 h-screen w-0 bg-white overflow-x-hidden transition-all duration-500 z-10 ${
          isOpen ? "w-3/4 lg:w-4/12" : ""
        }`}
      >
        <button
          className="absolute top-0 right-0 p-0 text-black text-6xl cursor-pointer"
          onClick={closeNav}
        >
          &times;
        </button>
        <div className="p-2">
          <p className="text-2xl">Контакти</p>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mt-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <Link
              href="https://www.google.com/maps?q=вулиця+Огієнка,45, Кам`янець-Подільський, Хмельницька область, Україна"
              target="_blank"
            >
              <p className=" text-base ">
                вулиця Огієнка, 45,
                <br /> Кам`янець-Подільський, Хмельницька область, Україна
              </p>
            </Link>
          </div>
          <div className="w-9/10 h-[2px] bg-slate-300 rounded-lg my-3"></div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <a href="mailto:r.1auta97@gmail.com">r.1auta97@gmail.com</a>
          </div>
          <div className="w-9/10 h-[2px] bg-slate-300 rounded-lg my-3"></div>
          <div>
            <p className="text-2xl">Ми в соцмережах</p>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="main"
        className={`ml-0 transition-margin duration-500 ${
          isOpen ? "ml-1/2" : ""
        }`}
      >
        <button className="text-4xl cursor-pointer" onClick={openNav}>
          <div className="flex flex-col gap-1.5">
            <div className="w-9 h-1 bg-black"></div>
            <div className="w-9 h-1 bg-black"></div>
            <div className="w-9 h-1 bg-black"></div>
          </div>
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50 z-0"
          onClick={closeNav}
        />
      )}
    </div>
  );
};
