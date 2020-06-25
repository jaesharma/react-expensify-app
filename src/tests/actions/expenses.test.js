import React from 'react';
import { addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('removeExpense test',()=>{
	const action=removeExpense({id:'123'});
	expect(action).toEqual({
		type:'REMOVE_EXPENSE',
		id:'123'
	});
});