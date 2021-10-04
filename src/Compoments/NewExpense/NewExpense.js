import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {


  const getExpenseDataHandler = (NewExpenseData) => {
    const expenseData = {
      ...NewExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onGetValue={getExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
