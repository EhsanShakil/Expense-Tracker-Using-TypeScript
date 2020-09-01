import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";
import { StateObject } from "../GlobalState/Gloabal_State";

const TransactionHistory = () => {
  const { transaction }: any = useContext(GlobalContext);
  console.log(transaction);
  return (
    <div>
      <h1>Transaction History</h1>
      {transaction.map((trans: StateObject, index: number) => (
        <div key={index}>
          <li> {trans.ID}</li>
          <li> {trans.Description}</li>
          <li> {trans.Amount}</li>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
