import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";
import { StateObject } from "../GlobalState/Gloabal_State";

const TransactionHistory = () => {
  const { transactions }: any = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h1>Transaction History</h1>
      {transactions.map((transaction: StateObject, index: number) => (
        <div key={index}>
          <li> {transaction.ID}</li>
          <li> {transaction.Description}</li>
          <li> {transaction.Amount}</li>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
