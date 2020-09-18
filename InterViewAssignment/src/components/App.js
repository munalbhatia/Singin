import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import dashboard from './dashboard';
import dashboard_b from './dashboard_b';
import dashboard_c from './dashboard_c';


class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">
					<Switch>
						<Route exact path="/register" component={Registration} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/dashboard" component={dashboard} />
						<Route exact path="/dashboard_b" component={dashboard_b} />
						<Route exact path="/dashboard_c" component={dashboard_c} />
				

						<Redirect from="/" to="login" />
					</Switch>
					</div>
				</Router>
		);
	}
}
export default App;
