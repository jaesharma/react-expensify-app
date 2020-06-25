import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem=({dispatch,id,description,note,amount,createdAt})=>(
	<div>
		<NavLink to={`/edit/${id}`}> <h3>{description}</h3> </NavLink>
		<p>{amount} - {moment(createdAt).format('MMMM Do, YYYY')} </p>
	</div>
);

export default connect()(ExpenseListItem);