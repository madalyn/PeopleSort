import React, { Component } from "react";

class TableRow extends Component {
	/**
	 * Handle the different input types for Pets so it displays the same
	 * C -> Cat
	 * D -> Dog
	 * B -> Both
	 * also None = Null
	 * TODO: ask about 'N'?
	 */
	formatPetData() {
		const data = this.props.data;

		switch (data.pet) {
			case "C":
				return "Cat";
			case "D":
				return "Dog";
			case "B":
				return "Both";
			default:
				return data.pet;
		}
	}

	render() {
		const data = this.props.data;

		return (
			<tr>
				<td>{data.lastName}</td>
				<td>{data.firstName}</td>
				<td>{data.middleInitial}</td>
				<td>{this.formatPetData()}</td>
				<td>{data.birthday}</td>
				<td>{data.favoriteColor}</td>
			</tr>
		);
	}
}

export default TableRow;
