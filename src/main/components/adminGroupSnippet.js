import React from "react";
import { Link } from "react-router-dom";

export default class AdminGroupSnippet extends React.Component {
	constructor(props) {
		super();
		this.state = {
			id: Math.ceil(Math.random() * 10)
		}
	}

	render() {
		return(
			<Link to={`groups/group/${this.state.id}`}>
				Group number {this.state.id}
			</Link>
		)
	}
}