import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem({ expense }) {
  const clickHandler = () => {
    console.log("clicked!");
  };
  const deleteHandler = (e) => {
    console.log("delete this expense");
    const expenseId = e.target.id;
    const expenseItem = document.getElementById(expenseId).parentElement;
    const parentExpense = expenseItem.parentElement;
    parentExpense.removeChild(expenseItem);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          name={expense.name}
          location={expense.location}
          price={expense.price}
        />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler} id={expense.id}>
        Delete Expense
      </button>
    </Card>
  );
}

export default ExpenseItem;
