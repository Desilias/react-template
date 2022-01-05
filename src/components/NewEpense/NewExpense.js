import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import React,{useState} from "react";

const NewExpense = (props) => {
  const[isEditind,setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = ()=>{
    setIsEditing(true);
  }
  const stopEditingHandler = ()=>{
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditind && <button onClick={startEditingHandler}>Add New Expenses</button>}
      {isEditind && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
