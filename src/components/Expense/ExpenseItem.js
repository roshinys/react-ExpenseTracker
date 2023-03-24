import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem({ expense }) {
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
    </Card>
  );
}

export default ExpenseItem;
