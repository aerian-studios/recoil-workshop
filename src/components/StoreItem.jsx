import React from "react";
import { useSetRecoilState } from "recoil";
import { basketState } from "../state/basketState";
import { stockState } from "../state/stockState";
import { replaceItemAtIndex } from "../utils/arrayUtils";

export const StoreItem = ({ item }) => {
  const { name, amountInStock, id } = item;

  console.log(`STORE ITEM: ${name}, RENDER`);
  const setBasket = useSetRecoilState(basketState);
  const setStock = useSetRecoilState(stockState);

  const addItemToBasket = () => {
    setBasket((oldBasket) => [
      ...oldBasket,
      {
        ...item,
      },
    ]);

    setStock((oldStock) => {
      const itemIndex = oldStock.findIndex((i) => i.id === id);
      return replaceItemAtIndex(oldStock, itemIndex, {
        ...item,
        amountInStock: item.amountInStock - 1,
      });
    });
  };

  return (
    <figure>
      <h4>{name}</h4>
      {amountInStock > 0 ? (
        <button onClick={addItemToBasket}>Add to basket</button>
      ) : (
        <b>OUT OF STOCK</b>
      )}
    </figure>
  );
};

export default StoreItem;
