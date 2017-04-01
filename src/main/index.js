import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import $ from "jquery";
import Tether from "tether";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


import AdminWrapper from "./pages/AdminWrapper";
import StudentWrapper from "./pages/StudentWrapper";
import Auth from "./pages/Auth";



const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<div>
			{ /*<Route path="/" component={AppContainer} >
				<Route path="" component={AdminWrapper}>
					<IndexRoute name="admin-main" component={AdminMain}/>
					<Route path="/edit" name="admin-edit" component={AdminEdit}/>
					<Route path="/attendance" name="admin-attendance" component={AdminAttendance}/>
					<Route path="/newuser" name="admin-newuser" component={AdminNewUser}/>
					<Route path="/resultsinput" name="results-input" component={ResultsInput}/>
					<Route path="/schedule-groups" name="schedule-groups" component={ScheduleNGroups}/>
				</Route>
			</Route>*/}
				<Route exact path="/" component={Auth}/>
				<Route path="/admin" component={AdminWrapper}/>
				<Route path="/student" component={StudentWrapper}/>
			</div>
		</HashRouter>
	</Provider>, 
app);