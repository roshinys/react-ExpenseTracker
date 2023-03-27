import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem({ expense }) {
  const [title, setTitle] = useState(expense.name);
  const [price, setPrice] = useState(expense.price);

  const clickHandler = () => {
    // title = "UpdatedTitle";
    setTitle("UpdatedTitle");
    console.log(title);
  };
  const deleteHandler = (e) => {
    console.log("delete this expense");
    const expenseId = e.target.id;
    const expenseItem = document.getElementById(expenseId).parentElement;
    const parentExpense = expenseItem.parentElement;
    parentExpense.removeChild(expenseItem);
  };
  const setpriceHandler = () => {
    setPrice(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          name={title}
          location={expense.location}
          price={price}
        />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler} id={expense.id}>
        Delete Expense
      </button>
      <button onClick={setpriceHandler}>add 100rs</button>
    </Card>
  );
}

export default ExpenseItem;
