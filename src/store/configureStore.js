import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default()=>{
	const store=createStore(
		combineReducers({
			expenses: expenseReducer,
			filters: filterReducer
		}),
		composeEnchancers(applyMiddleware(thunk))
	);
	return store;
}