"use client";

import React, { useState } from "react";
import { Desert, desertData } from "../Cards/CardDesert";

export const CardListDesert: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Desert | null>(null);

  const openModal = (card: Desert) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-col gap-4 w-5/6 mx-auto md:flex-row md:flex-wrap md:gap-6 justify-center my-2">
      {desertData.map((card, index) => (
        <div
          key={index}
          className="flex md:flex-wrap cursor-pointer border border-gray-200 rounded-md shadow-md md:w-[250px] md:h-[350px] "
          onClick={() => openModal(card)}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-44 h-44 rounded-2xl p-2 md:w-60 md:mx-auto md:h-60"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col py-2 text-start md:px-2">
              <p className="font-bolt text-xl leading-5">{card.title}</p>
              <p className="text-xs text-gray-400 py-3">{card.text}</p>
            </div>
            <div className="px-3">
              <p className="text-xl text-end text-[#ffc26c]">{card.price}₴</p>
            </div>
          </div>
        </div>
      ))}

      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-4 w-11/12 rounded-md lg:w-1/3 ">
            <div className="flex gap-x-4">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-44 h-44 rounded-lg lg:w-60 lg:h-60"
              />
              <div className="h-44">
                <p className="font-bold">{selectedCard.title}</p>
                <p className="text-m text-gray-500 py-3">{selectedCard.text}</p>
                {/* <p className="text-xl text-orange-400 bottom-0">
                  {selectedCard.price}₴
                </p> */}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-gray-100 px-4 py-2 mt-4"
                onClick={closeModal}
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
