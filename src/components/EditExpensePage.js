import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage=(props)=>(
	<div>
		<ExpenseForm 
			expense={props.expense}
			onSubmit={(expense)=>{
				props.dispatch(startEditExpense(props.match.params.id,expense));
				props.history.push('/dashboard');
			}}
		/>
		<button className="long-btn rm-btn" onClick={()=>{
			props.dispatch(startRemoveExpense({id: props.match.params.id}));
			props.history.push('/dashboard');
		}}>remove</button>
	</div>
);

const mapStateToProps=(state,props)=>{
	return {
		expense: state.expenses.find((expense)=> expense.id===props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditExpensePage);