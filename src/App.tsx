import React from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalState/Gloabal_State";
import AddTransaction from "./Components/Add_Transaction";
import TransactionHistory from "./Components/Transaction_History";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import firebase from "./firebase";

function App() {
  let messaging: any = firebase.messaging();
  if (Notification.permission === "granted") {
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((result: any) => console.log("Token: ", result));
  } else if (Notification.permission === "denied") {
    messaging.requestPermission().catch((error: any) => console.log(error));
  }
  return (
    <GlobalProvider>
      <h1 className="header">Expense Tracker</h1>
      <div className="wrapper">
        <Balance />
        <Income />
        <Expense />
      </div>
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
