import React from "react";
import { Route } from "react-router-dom";

import AdminGroup from "./adminGroups/AdminGroup";
import AdminGroups from "./adminGroups/AdminGroups";
import AdminGroupsNew from "./adminGroups/AdminGroupsNew";

export default class AdminGroupsWrapper extends React.Component {

	render() {
		return (
			<div>
				<Route exact strict path="/admin/groups" component={AdminGroups}/>
				<Route path="/admin/groups/group/:id" component={AdminGroup}/>
				<Route path="/admin/groups/new" component={AdminGroupsNew}/>
			</div>
		);
	}
}