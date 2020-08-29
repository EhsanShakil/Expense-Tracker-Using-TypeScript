import React, { createContext, useReducer } from "react";
import AppReducer from "./App_Reducer";

export type TranstionType = {
  ID: number;
  Description: string;
  Amount: number;
};

type TranstionArray = {
  transactions: TranstionType[];
};

type Context = {
  transaction: TranstionType[];
  addTrans: (transaction: TranstionType) => void;
};
let InitialState: TranstionArray = {
  transactions: [
    {
      ID: 1,
      Description: "Income",
      Amount: 5000,
    },
  ],
};

export const GlobalContext = createContext<Partial<Context>>({});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const addTrans = (transaction: TranstionType) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ transaction: state.transactions, addTrans }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
