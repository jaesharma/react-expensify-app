import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpensesSummary from './ExpensesSummary';
import SelectedExpenses from '../selectors/expenses';

const ExpenseList=(props)=>(
	<div>
		<h1> Expense List</h1>
		<ExpensesSummary />
		{ props.expenses.map((expense)=>{
			return (
				<ExpenseListItem key={expense.id} {...expense}/>
				);
		})}
	</div>
);

const ConnectedExpenseList=connect((state)=>{
	return {
		expenses: SelectedExpenses(state.expenses,state.filters)
	}
})(ExpenseList);

export default ConnectedExpenseList;