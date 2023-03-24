import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expense() {
  const expenseItems = [
    {
      id: 1,
      name: "food",
      price: 10,
      date: new Date(3, 28, 2021),
      location: "Mysore",
    },
    {
      id: 2,
      name: "petrol",
      price: 10,
      date: new Date(3, 28, 2022),
      location: "Bengaluru",
    },
    {
      id: 3,
      name: "other",
      price: 20,
      date: new Date(3, 28, 2023),
      location: "Bombay",
    },
  ];
  return (
    <Card className="expense">
      <h1>Expense Tracker</h1>
      {expenseItems.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </Card>
  );
}

export default Expense;
