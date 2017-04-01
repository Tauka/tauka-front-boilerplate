import React from "react";
import { Link } from "react-router-dom";
// import styles from "../scss/adminMain.css";

export default class AdminMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stylePath: "css/adminMain.css",
			renderIt: false
		}
	}

	componentDidMount() {
		document.getElementById("pagestyle").setAttribute("href", this.state.stylePath);
		this.setState({
			renderIt: true
		});
	}

	render() {
		let render = this.state.renderIt ?
		<header>

			<div class="hero-text-box">


			    <div class="col span-1-of-2">
			        <div class="row">
			            <Link to="/admin/register" class="btn registration">
			                <h1 id="registrationtext"> Регистрация пользователей</h1>
			                <h1 id="regnumbertext"> 127 </h1>
			                <h2 id="regnumberundertext"> Пользователей</h2>
			            </Link>
			        </div>

			        <div class="row">
			            <div class="col span-1-of-2">
			                <Link to="admin/attendance" class="attendance">
			                    <h1 id="attendancetext"> Посещяемость </h1>
			                </Link>
			            </div>
			        </div>

			    </div>

			    <div class="col span-1-of-2">

			        <div class="row">
			            <div class="col span 1-of-2">
			                <Link to="admin/groups" class="btn timetable">
			                    <h1 id="timetabletext"> Расписание и группы </h1>
			                    <h1>  </h1>
			                </Link>
			            </div>

			        </div>

			        <div class="row">

			            <div class="col span-1-of-4">
			                <Link to="admin/testresult" class="columna columna1">
			                    <h2 id="testresulttext"> Результаты тестов </h2>
			                </Link>
			            </div>

			            <div class="col span-1-of-4">
			                <Link to="/admin/edit" class="columna columna2">
			                    <h2 id="editingtext"> Редактировать  </h2>
			                </Link>
			            </div>

			        </div>

			    </div>



			</div>
		</header>
		:
		null;

		return (
			render
		)
	}
}