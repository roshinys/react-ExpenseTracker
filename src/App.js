import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
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
    <div className="app">
      <h1>Expense Tracker</h1>
      {expenseItems.map((expense)=>{
        return <ExpenseItem expense={expense} key={expense.id}/>
      })}
    </div>
  );
}

export default App;
