import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {removeExpense} from './actions/expenses';
import {editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './router/AppRouter.js';
import {startSetExpenses} from './actions/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import './firebase/firebase';

const store=configureStore();

const jsx=(
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render(<p>loading...</p>,document.getElementById('app'));
store.dispatch(startSetExpenses()).then(()=>{
	ReactDOM.render(jsx,document.getElementById('app'));
});