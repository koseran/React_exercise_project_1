import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selected_year, SetYearValue] = useState("2020");

  const getYearValue = (YearValue) => {
    SetYearValue(YearValue);
  };

  console.log(selected_year);
  const FilterArray = props.items.filter( year => year.date.getFullYear().toString === selected_year);

  return (
    <div>
      <ExpensesFilter selected={selected_year} onYearValue={getYearValue} />
      <Card className="expenses">
        {FilterArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
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
