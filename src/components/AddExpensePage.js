import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage=(props)=>(
	<div>
		<ExpenseForm onSubmit={(expense)=>{
			props.dispatch(startAddExpense(expense));
			props.history.push('/dashboard');
		}}/>
	</div>
);

export default connect()(AddExpensePage);