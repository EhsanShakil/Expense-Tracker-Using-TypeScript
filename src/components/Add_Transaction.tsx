import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

type State = {
  description: string;
  amount: number;
};

const AddTransaction = () => {
  const [description, setDescription] = useState<State>();
  const [amount, setAmount] = useState<State>();

  const { addTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h1>Add Transaction</h1>
      <form>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Enter Tranaction Description"
        />
        <label htmlFor="amount">Transaction Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter Tranaction Amount"
        />
      </form>
    </div>
  );
};

export default AddTransaction;
