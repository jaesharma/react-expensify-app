import {v4 as uuid } from 'uuid';
import database,{firebase} from '../firebase/firebase';

export const addExpense=(expense)=>({
		type: 'ADD_EXPENSE',
		expense
});

export const startAddExpense=(expenseData={})=>{
	return (dispatch)=>{
		const {
			description='',
			note='',
			amount=0,
			createdAt=0
		}=expenseData;
		const expense={ description, note, amount, createdAt};

		database.ref('expenses').push(expense).then((ref)=>{
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		});
	};
};

export const removeExpense=({id}={})=>({
	type: 'REMOVE_EXPENSE',
	id
});

export const startRemoveExpense=({id}={})=>{
	return (dispatch)=>{
		const toBeRemoved='expenses'+'/'+id;
		database.ref(toBeRemoved).remove().then((ref)=>{
			dispatch(removeExpense({
				id
			}))
		});
	};
};

export const editExpense=(id,update)=>({
	type: 'EDIT_EXPENSE',
	id,
	update
});
