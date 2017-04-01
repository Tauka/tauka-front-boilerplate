import React from "react";
import { Route } from "react-router-dom";

import StudentCourse from "./student/StudentCourse";
import StudentFinance from "./student/StudentFinance";
import StudentMain from "./student/StudentMain";

export default class StudentWrapper extends React.Component {

	render() {
		return (
			<div>
				<Route path="/student/main" component={StudentMain} />
				<Route path="/student/course" component={StudentCourse} />
				<Route path="/student/finance" component={StudentFinance} />
			</div>
		);
	}
}