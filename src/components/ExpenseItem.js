import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({expense}) {
  return (
    <div className="expense-item" key={expense.id}>
      <div>{expense.date}</div>
      <div className="expense-item__description">
        <h2>{expense.name}</h2>
        <h2>{expense.location}</h2>
        <div className="expense-item__price">Rs {expense.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
