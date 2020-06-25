import {BrowserRouter,Route,Link,NavLink,Switch} from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

const AppRouter=()=>(
	<BrowserRouter>
	  <Header />
		  <Switch>
		  	<Route path="/" component={ExpenseDashboardPage} exact={true} />
		  	<Route path="/create" component={AddExpensePage} />
		  	<Route path="/edit/:id" component={EditExpensePage} />
		  	<Route path="/help" component={HelpPage} />
		  	<Route component={NotFound} />
		  </Switch>
	</BrowserRouter>
);

export default AppRouter;