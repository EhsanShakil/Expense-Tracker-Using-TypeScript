import React from "react";

const AddTransaction = () => {
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
