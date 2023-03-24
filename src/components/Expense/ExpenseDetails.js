import React from "react";
import "./ExpenseItem.css";

function ExpenseDetails({ name, location, price }) {
  return (
    <>
      <h2>{name}</h2>
      <h2>{location}</h2>
      <div className="expense-item__price">Rs {price}</div>
    </>
  );
}

export default ExpenseDetails;
