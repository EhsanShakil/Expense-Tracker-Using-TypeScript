import React, { createContext, useReducer } from "react";
import AppReducer from "./App_Reducer";

type State = {
  transactions: {
    ID: number;
    Description: string;
    Amount: number;
  }[];
};

type StateObject = {
  ID: number;
  Description: string;
  Amount: number;
};

type Action = {
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
  ],
};

export const GlobalContext = createContext<Partial<Action>>({});

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
