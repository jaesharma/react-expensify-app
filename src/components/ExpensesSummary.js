import React from 'react';
import { connect } from 'react-redux';
import CurrentExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

export const ExpenseSummary=(props)=>{
	const expenseCount=props.expenses.length;
	const expenseWord=expenseCount===1? 'expense': 'expenses';
	return (
			<div className="page-header__container">
				<h2 className="page-header__header">viewing <span>{expenseCount}</span> {expenseWord} totalling &nbsp; 
					<span>
						 {
							props.expenses
							.map((expense)=>expense.amount)
							.reduce((sum,value)=>sum+value,0)
						 }&#8377;
					</span>
				</h2>
				<Link to="/create"><button>Add Expense</button></Link>
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