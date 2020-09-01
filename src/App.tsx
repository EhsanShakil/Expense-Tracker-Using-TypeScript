import React from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalState/Gloabal_State";
import AddTransaction from "./Components/Add_Transaction";
import TransactionHistory from "./Components/Transaction_History";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
      <Balance />
      <Income />
      <Expense />
      <AddTransaction />
      <TransactionHistory />
    </GlobalProvider>
  );
}

export default App;
