import { createStore } from 'redux';

const incrementCount=({ incrementBy=1 }={})=>({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount=({ decrementBy=1}={})=>({
	type: 'DECREMENT',
	decrementBy
});

const setCount=({ count })=>({
	type: 'SET',
	count: count
});

const resetCount=(payload={})=>({
	type: 'RESET'
});

const store=createStore((state={ count: 0},action)=>{
	switch(action.type){
		case 'INCREMENT':
			return{
				count: state.count+action.incrementBy
			}
		case 'DECREMENT':
			return{
				count: state.count-action.decrementBy
			}
		case 'RESET':
			return {
				count: 0
			}
		case 'SET':
			return {
				count: action.count
			}
		default:
			return state
	}
});

const unsubscribe=store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 4}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 12}));
store.dispatch(setCount({ count: 40}));
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 12}))