import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage=()=>(
	<div>
		Dashboard Page
		<ExpenseListFilters />
		<ExpenseList/>
	</div>
);

export default DashboardPage;