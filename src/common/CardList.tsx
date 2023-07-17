"use client";

import React, { useState } from "react";
import { cardData } from "./Card/Card";
import { Card } from "./Card/Card";

export const CardList: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const openModal = (card: Card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-col gap-4 w-5/6 mx-auto px-2 md:flex-row md:flex-wrap md:gap-6 justify-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-gray-50 shadow-md flex rounded-md justify-between md:w-1/4 md:flex-wrap cursor-pointer"
          onClick={() => openModal(card)}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-24 h-24 p-2 my-auto"
          />
          <div className="flex flex-col p-2">
            <p className="font-bold">{card.title}</p>
            <p className="text-sm py-3">{card.text}</p>
            <p className="text-xl p-2 text-end text-orange-400">
              {card.price}₴
            </p>
          </div>
        </div>
      ))}

      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-4 w-11/12 rounded-md">
            <div className="flex">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-48 h-48"
              />
              <div>
                <p className="font-bold">{selectedCard.title}</p>
                <p className="text-sm py-3">{selectedCard.text}</p>
                <p className="text-xl p-2 text-end pt-12 text-orange-400">
                  {selectedCard.price}₴
                </p>
              </div>
            </div>
            <button className="bg-gray-100 px-4 py-2 mt-4" onClick={closeModal}>
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
