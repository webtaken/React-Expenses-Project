import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState(new Date().getFullYear().toString());

  const changeYearHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.expenses.filter(expense =>
    expense.date.getFullYear().toString() === yearFilter);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onChangeYear={changeYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
