import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

store.subscribe(()=>{
	const state=store.getState();
	const visibleExpenses=getVisibleExpenses(state.expenses,state.filter);
	console.log(visibleExpenses);
});