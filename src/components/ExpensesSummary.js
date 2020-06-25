import React from 'react';
import { connect } from 'react-redux';
import CurrentExpenses from '../selectors/expenses';

export const ExpenseSummary=(props)=>{
	const expenseCount=props.expenses.length;
	const expenseWord=expenseCount===1? 'expense': 'expenses';
	if(props.expenses.length===0){
		return (
			<div>
				<h2>cannot find anything</h2>
			</div>
			);
	}
	return (
			<div>
				<h2>viewing {expenseCount} {expenseWord} totalling </h2>
				<h2>
					{
						props.expenses
						.map((expense)=>expense.amount)
						.reduce((sum,value)=>sum+value,0)
					}
				</h2>
			</div>
			);
}

const mapStateToProps=(state)=>{
	const curr_expenses=CurrentExpenses(state.expenses,state.filters);
	return {
		expenses: curr_expenses
	}
}

export default connect(mapStateToProps)(ExpenseSummary);