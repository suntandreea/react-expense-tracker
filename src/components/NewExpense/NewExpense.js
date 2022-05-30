import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="submit" onClick={toggleForm}>
          Add New Expense
        </button>
      )}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleForm} />}
    </div>
  );
};

export default NewExpense;
