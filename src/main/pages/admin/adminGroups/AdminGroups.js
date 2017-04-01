import React from "react";
import { Link } from "react-router-dom";

import AdminGroupSnippet from "../../../components/adminGroupSnippet";

export default class AdminGroups extends React.Component {
	constructor(props) {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.state = {
			groupNameInput: ""
		}

	}

	handleChange(e) {
		this.setState({
			groupNameInput: e.target.value
		});
	}

	render() {

		return(
			<div style={{display: "flex", flexDirection: "column"}}>
				<input placeholder="enter group name" value={this.groupNameInput} onChange={this.handleChange}/>
				<AdminGroupSnippet/>	
				<AdminGroupSnippet/>	
				<AdminGroupSnippet/>
				<Link to="groups/new"><button>add</button></Link>
			</div>
		)
	}
}