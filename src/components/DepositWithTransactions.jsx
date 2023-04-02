import useUserContext from "../hooks/useUserContext";
import React from "react";
import Deposit from "./Deposit";

const DepositTransactions = ({ transactionHistory }) => {
    return (
      <>
       <div class="transactionWrapper">
        <h3>Deposit Transactions</h3>
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
  
  const DepositWithTransactions = () => {
    const { loggedInUser } = useUserContext();
  
    return (
      <>
        <Deposit />
        {loggedInUser && (
          <DepositTransactions transactionHistory={loggedInUser.transactionHistory} />
        )}
      </>
    );
  };
  
  export default DepositWithTransactions;
  