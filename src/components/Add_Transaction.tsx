import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

type State = {
  description: string;
  amount: number;
  callback: (e: React.FormEvent<EventTarget>) => void;
};

const AddTransaction = () => {
  const [description, setDescription] = useState<State>();
  const [amount, setAmount] = useState<State>();

  const { addTransaction }: any = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const transaction: object = {
      ID: Math.round(Math.random() * 900000),
      description,
      amount,
    };
    addTransaction(transaction);
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Enter Tranaction Description"
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <label htmlFor="amount">Transaction Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          placeholder="Enter Tranaction Amount"
          onChange={(e: any) => setAmount(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTransaction;
