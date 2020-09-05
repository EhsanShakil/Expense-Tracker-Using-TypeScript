import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

const AddTransaction = () => {
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const { addTransaction }: any = useContext(GlobalContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const transaction: any = {
      ID: Math.round(Math.random() * 900000),
      Description: description,
      Amount: Number(amount),
    };
    addTransaction(transaction);
    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Enter Tranaction Description"
          onChange={(e: any) => setDescription(e.target.value)}
          required
          className="input"
        />
        <label htmlFor="amount">Transaction Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          placeholder="Enter Tranaction Amount"
          onChange={(e: any) => setAmount(e.target.value)}
          required
          className="input"
        />

        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default AddTransaction;
