import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

const Balance = () => {
  const { transaction }: any = useContext(GlobalContext);

  const amount = transaction.map((transaction: any) => transaction.Amount);
  const total = amount.reduce((acc: number, item: number) => (acc += item), 0);
  console.log(total);

  return (
    <div className="container">
      <h2>Current Balance</h2>
      <h3>${total}</h3>
    </div>
  );
};

export default Balance;
