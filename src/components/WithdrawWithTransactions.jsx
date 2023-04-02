import useUserContext from "../hooks/useUserContext";
import React from "react";
import Withdraw from "./Withdraw";

const WithdrawTransactions = ({ transactionHistory }) => {
    return (
      <>
      <div class="transactionWrapper">
        <h3>Withdraw Transactions</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </>
    );
  };
  
  const WithdrawWithTransactions = () => {
    const { loggedInUser } = useUserContext();
  
    return (
      <>
        <Withdraw />
        {loggedInUser && (
          <WithdrawTransactions transactionHistory={loggedInUser.transactionHistory} />
        )}
      </>
    );
  };
  
  export default WithdrawWithTransactions;
  