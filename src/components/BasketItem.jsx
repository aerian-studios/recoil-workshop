import React from "react";
import { useSetRecoilState } from "recoil";
import { basketState } from "../state/basketState";

export const BasketItem = ({ item }) => {
  const { name } = item;
  //   const setBasket = useSetRecoilState(basketState);

  //   const addItemToBasket = () => {
  //     setBasket((oldBasket) => [
  //       ...oldBasket,
  //       {
  //         ...item,
  //       },
  //     ]);
  //   };

  return (
    <figure>
      <h4>{name}</h4>
      {/* {amountInStock > 0 ? (
        <button onClick={addItemToBasket}>Add to basket</button>
      ) : (
        <b>OUT OF STOCK</b>
      )} */}
    </figure>
  );
};

export default BasketItem;
