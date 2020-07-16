import React from "react";
import "./App.css";
import Store from "./components/Store";
import Basket from "./components/Basket";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Store />
      <Basket />
    </RecoilRoot>
  );
}

export default App;
