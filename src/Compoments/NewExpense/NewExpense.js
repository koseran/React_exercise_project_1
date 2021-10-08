import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //inputs
  const [clicked, onClicked] = useState(false);

  const getExpenseDataHandler = (NewExpenseData) => {
    const expenseData = {
      ...NewExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const AddExpenseHandler = () => {
      clicked === false ? onClicked(true) : onClicked(false);
  };

  return (
    <div className="new-expense">
      {clicked === false ? (
        <button onClick={AddExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onCancelClick={AddExpenseHandler}
          onGetValue={getExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
