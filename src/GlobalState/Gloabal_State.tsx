import React, { createContext, useReducer } from "react";
import AppReducer from "./App_Reducer";

export type State = {
  transaction: StateObject[];
};

export type StateObject = {
  ID: number;
  Description: string;
  Amount: number;
};

type contextProps = {
  transaction: StateObject[];
  addTransaction: (transaction: StateObject) => void;
};

let InitialState: State = {
  transaction: [
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
      ID: 3,
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
      value={{ transaction: state.transaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
