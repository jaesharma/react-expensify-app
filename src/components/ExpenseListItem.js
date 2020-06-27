import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem=({dispatch,id,description,note,amount,createdAt})=>(
	<div>
		<div className="expense-list expense-item">
			<div className="expense-item__title">
				<NavLink 
				  className="link"
				  to={`/edit/${id}`}
				 > 
				   <h3>{description}</h3> 
				 </NavLink>
				<p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
			</div>
			<p className="expense-item__amount">{amount}</p>
		</div>
	</div>
);

export default connect()(ExpenseListItem);