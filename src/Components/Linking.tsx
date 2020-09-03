import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TransactionHistory from "./Transaction_History";

const Linking = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/transaction-history" component={TransactionHistory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Linking;
