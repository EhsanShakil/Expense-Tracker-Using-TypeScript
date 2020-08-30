import React from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalState/Gloabal_State";
import AddTransaction from "./components/Add_Transaction";
import TransactionHistory from "./components/Transaction_History";

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
      <AddTransaction />
      <TransactionHistory />
    </GlobalProvider>
  );
}

export default App;
