import React from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalState/Gloabal_State";

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
    </GlobalProvider>
  );
}

export default App;
