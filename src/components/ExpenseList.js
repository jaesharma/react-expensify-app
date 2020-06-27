import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectedExpenses from '../selectors/expenses';

const ExpenseList=(props)=>(
	<div className="expense-list">
	  <div className="expense-list__header">
		<h3 className="expense-list__title"> Expense List</h3>
		<h3 className="expense-list__title"> Amount(&#8377;)</h3>
	  </div>
	  <div className="mobile-header">
	  	<h3 className="expense-list__title"> Expense List</h3>
	  </div>
		{ props.expenses.length!==0 ? props.expenses.map((expense)=>{
			return (
				<ExpenseListItem key={expense.id} {...expense}/>
				);
		}):
		   <p className="expense-list__title expense-list__msg expense-item">No expense</p>
		}
	</div>
);

const ConnectedExpenseList=connect((state)=>{
	return {
		expenses: SelectedExpenses(state.expenses,state.filters)
	}
})(ExpenseList);

export default ConnectedExpenseList;