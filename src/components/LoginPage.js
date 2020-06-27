import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage=({startLogin})=>(
	<div className="box-layout">
	  <div className="box-layout__box">
	  	<h1 className="box-layout__title">Expensify</h1>
	  	<p>one place to manage & control your expenses</p>
		<button className="login-button" onClick={startLogin}>Login with google</button>
	  </div>
	</div>
);

const mapDispatchToProps=(dispatch)=>({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);