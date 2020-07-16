import React from "react";
import { useRecoilValue } from "recoil";
import { stockState } from "../state/stockState";
import { StoreItem } from "./StoreItem";

export const Store = () => {
  const stock = useRecoilValue(stockState);

  return (
    <div>
      {stock.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Store;
