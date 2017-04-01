import React from "react";
import { Route } from "react-router-dom";

import StudentCourseAttendance from "./studentCourse/StudentCourseAttendance";
import StudentCourseTestResult from "./studentCourse/StudentCourseTestResult";

export default class StudentCourse extends React.Component {

	render() {
		return (
			<div>
				Student Course
				<Route path="/student/course/attendance" component={StudentCourseAttendance}/>
				<Route path="/student/course/testresult" component={StudentCourseTestResult}/>
			</div>
		)
	}
}