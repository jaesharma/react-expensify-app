import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';

const Info=(props)=>(
	<div>
		<p>Welcome {props.username}</p>
	</div>
);

const requireAuthentication=(WrapperComponent)=>{
	return(props)=>(
		<div>
			{props.isAdmin && <p> You are authenticated </p>}
			<WrapperComponent {...props} />
		</div>
	);
}

const AuthInfo=requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAdmin={false} username='jayesh'/>,document.getElementById('app'));