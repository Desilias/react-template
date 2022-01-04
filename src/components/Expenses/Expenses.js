import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
const Expenses = (props) => {
  const [fiteredYear, setFiteredYear] = useState("2021");
  const filterChangeHandler = (selectYear) => {
    setFiteredYear(selectYear);
  };
  const filteredExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===fiteredYear;
  }

  )
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fiteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key= {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
