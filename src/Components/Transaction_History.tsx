import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/Gloabal_State";
import { StateObject } from "../GlobalState/Gloabal_State";

const TransactionHistory = () => {
  const { transaction, deleteTransaction }: any = useContext(GlobalContext);
  console.log(transaction);

  return (
    <div>
      <h1>Transaction History</h1>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>
              <h3>Description</h3>
              <hr />
            </th>
            <th>
              <h3>Amount</h3>
              <hr />
            </th>
            <th>
              <h3>Remove</h3>
              <hr />
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {transaction.map((trans: StateObject, index: number) => (
            <tr key={index}>
              <td>
                {trans.Description}
                <hr />
              </td>
              <td>
                {trans.Amount}
                <hr />
              </td>
              <td>
                <button
                  className="remove"
                  onClick={() => deleteTransaction(trans.ID)}
                >
                  Delete
                </button>
                <hr />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
