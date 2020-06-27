import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header=({startLogout})=>(
	<header className="header">
		<Link className="Link" to="/dashboard" exact="true">
			<h1>Expensify</h1>
		</Link>
		<button className="link-button" onClick={startLogout}>Logout</button>
	</header>
);

const mapDispatchToProps=(dispatch)=>({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);