import "./App.css";
import React from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div className="app">
      <NewExpense />
      <Expense />
    </div>
  );
};

export default App;
