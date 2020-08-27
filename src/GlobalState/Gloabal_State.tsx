import react, { createContext, useReducer } from "react";

type State = {
  ID: number;
  Description: string;
  Amount: number;
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

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InitialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
