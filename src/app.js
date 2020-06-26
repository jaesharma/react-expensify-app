import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {removeExpense} from './actions/expenses';
import {editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter,{history} from './router/AppRouter.js';
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {firebase} from './firebase/firebase';

const store=configureStore();

const jsx=(
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

let hasRendered=false;
const renderApp=()=>{
	if(!hasRendered){
		ReactDOM.render(jsx,document.getElementById('app'));
		hasRendered=true;
	}
};

ReactDOM.render(<p>loading...</p>,document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(()=>{
			renderApp();
			if(history.location.pathname==='/'){
				history.push('/dashboard');
			}
		});
	}else{
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
})