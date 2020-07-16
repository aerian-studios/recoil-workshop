import { atom } from "recoil";

export const stockState = atom({
  key: "stockState",
  default: [
    { id: 1, name: "pants", amountInStock: 10 },
    { id: 2, name: "socks", amountInStock: 2 },
    { id: 3, name: "shirts", amountInStock: 1 },
  ],
});
