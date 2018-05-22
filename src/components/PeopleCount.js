import React, { Component } from "react";
import "../stylesheets/peopleCount.css";

class PeopleCount extends Component {
	render() {
		return <div className="peopleCount">{this.props.peopleCount} People</div>;
	}
}

export default PeopleCount;
