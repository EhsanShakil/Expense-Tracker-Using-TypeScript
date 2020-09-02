import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

const Balance = () => {
  const { transaction }: any = useContext(GlobalContext);

  const amount = transaction.filter(
    (transaction: any) => transaction.Amount < 0
  );
  const expense = amount.map((income: any) => income.Amount);
  const total = expense.reduce((acc: number, item: number) => (acc += item), 0);
  console.log(total);

  return (
    <div className="balancecomponent">
      <h2>Expense</h2>

      <h3>
        <b>-${Math.abs(total)}</b>
      </h3>
    </div>
  );
};

export default Balance;
