import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [fiteredYear, setFiteredYear] = useState("2021");
  const filterChangeHandler = (selectYear) => {
    setFiteredYear(selectYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === fiteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fiteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
       <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
