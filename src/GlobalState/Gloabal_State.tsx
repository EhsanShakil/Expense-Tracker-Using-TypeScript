import react, { createContext, useReducer } from "react";

let InitialState = {
  transactions: [
    {
      ID: 1,
      Description: "Income",
      Amount: 5000,
    },
  ],
};
