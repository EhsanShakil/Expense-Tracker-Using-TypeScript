import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

const Balance = () => {
  const { transaction }: any = useContext(GlobalContext);

  const amount = transaction.filter(
    (transaction: any) => transaction.Amount > 0
  );
  const income = amount.map((income: any) => income.Amount);
  const total = income.reduce((acc: number, item: number) => (acc += item), 0);
  console.log(total);

  return (
    <div className="balancecomponent">
      <h2>Income</h2>

      <h3>
        <b>${total}</b>
      </h3>
    </div>
  );
};

export default Balance;
