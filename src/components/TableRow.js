import React, { Component } from "react";

class TableRow extends Component {
	render() {
		const data = this.props.data;

		return (
			<tr>
				<td>{data.lastName}</td>
				<td>{data.firstName}</td>
				<td>{data.middleInitial}</td>
				<td>{data.pet}</td>
				<td>{data.birthday}</td>
				<td>{data.favoriteColor}</td>
			</tr>
		);
	}
}

export default TableRow;
