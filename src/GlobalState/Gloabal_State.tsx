import React, { createContext, useReducer } from "react";
import AppReducer from "./App_Reducer";

type State = {
  transactions: {
    ID: number;
    Description: string;
    Amount: number;
  }[];
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

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const addTrans = (transaction: State) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, addTrans }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
