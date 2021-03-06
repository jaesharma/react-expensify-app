import {Router,Route,Link,NavLink,Switch} from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from "history";
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history=createBrowserHistory();

const AppRouter=()=>(
	<Router history={history}>
		  <Switch>
		  	<PublicRoute path="/" component={LoginPage} exact={true} />
		  	<PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
		  	<PrivateRoute path="/create" component={AddExpensePage} />
		  	<PrivateRoute path="/edit/:id" component={EditExpensePage} />
		  	<PublicRoute component={NotFound} />
		  </Switch>
	</Router>
);

export default AppRouter;