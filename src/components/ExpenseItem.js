import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseItems = [
    { id: 1, name: "food", price: 10, date: "Mar 28,2021", location: "Mysore" },
    {
      id: 2,
      name: "petrol",
      price: 10,
      date: "Mar 28,2022",
      location: "Bengaluru",
    },
    {
      id: 3,
      name: "other",
      price: 20,
      date: "Mar 28,2023",
      location: "Bombay",
    },
  ];
  return (
    <>
      {expenseItems.map((expense) => {
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
      })}
    </>
  );
}

export default ExpenseItem;
