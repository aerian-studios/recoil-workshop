import React from "react";
import { basketState } from "../state/basketState";
import { useRecoilValue } from "recoil";
import BasketItem from "./BasketItem";

export const Basket = () => {
  console.log("BASKET RENDER");

  // first use the value then use a selector
  const itemsInBasket = useRecoilValue(basketState);

  return (
    <>
      <h2>Your Basket:</h2>
      {itemsInBasket.map((item, index) => (
        <BasketItem key={index} item={item} />
      ))}
    </>
  );
};

export default Basket;
