import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item" >
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <ExpenseDetails name={expense.name} location={expense.location} price={expense.location}/>
      </div>
    </div>
  );
}

export default ExpenseItem;
