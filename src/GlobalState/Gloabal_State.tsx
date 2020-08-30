import React, { createContext, useReducer } from "react";
import AppReducer from "./App_Reducer";

export type State = {
  transactions: StateObject[];
};

export type StateObject = {
  ID: number;
  Description: string;
  Amount: number;
};

type contextProps = {
  transactions: StateObject[];
  addTransaction: (transaction: StateObject) => void;
};

let InitialState: State = {
  transactions: [
    {
      ID: 1,
      Description: "Income",
      Amount: 5000,
    },
    {
      ID: 2,
      Description: "Expense",
      Amount: -500,
    },
    {
      ID: 1,
      Description: "Bill",
      Amount: 200,
    },
  ],
};

export const GlobalContext = createContext<Partial<contextProps>>({});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const addTransaction = (transaction: StateObject) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
