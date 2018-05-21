import React, { Component } from "react";

class PeopleCount extends Component {
	render() {
		return <div>{this.props.peopleCount} People</div>;
	}
}

export default PeopleCount;
