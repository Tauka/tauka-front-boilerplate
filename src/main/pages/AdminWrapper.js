import React from "react";
import { Route } from "react-router-dom";

import AdminMain from "./admin/AdminMain";
import AdminRegistration from "./admin/AdminRegistration";
import AdminEdit from "./admin/AdminEdit";
import AdminGroupsWrapper from "./admin/AdminGroupsWrapper";
import AdminTestResult from "./admin/AdminTestResult";
import AdminAttendance from "./admin/AdminAttendance";

export default class AdminWrapper extends React.Component {

	render() {
		return (
			<div>
				<Route exact strict path="/admin" component={AdminMain}/>
				<Route path="/admin/register" component={AdminRegistration}/>
				<Route path="/admin/edit" component={AdminEdit}/>
				<Route path="/admin/groups" component={AdminGroupsWrapper}/>
				<Route path="/admin/testresult" component={AdminTestResult}/>
				<Route path="/admin/attendance" component={AdminAttendance}/>
			</div>
		);
	}
}