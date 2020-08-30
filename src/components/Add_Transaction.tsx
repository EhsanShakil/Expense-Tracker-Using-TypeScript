import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";

const AddTransaction = () => {
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [id, setId] = useState<number>(100);

  const { addTransaction }: any = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(id);
    console.log(description);
    console.log(amount);
    setId(id + 1);
    const transaction: any = {
      ID: id,
      Description: description,
      Amount: amount,
    };
    console.log(addTransaction(transaction));
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTransaction;
