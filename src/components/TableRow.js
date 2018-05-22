import React, { Component } from "react";

class TableRow extends Component {
	getPetImage() {
		const pet = this.props.data.pet;

		switch (pet) {
			case "Cat":
				return "/images/cat.png";
			case "Dog":
				return "/images/dog.png";
			case "Both":
				return "/images/both.png";
			default:
				return "";
		}
	}

	render() {
		const data = this.props.data;

		return (
			<tr>
				<td>{data.lastName}</td>
				<td>{data.firstName}</td>
				<td>{data.middleInitial}</td>
				<td>
					<img src={this.getPetImage()} width="25" height="25" />
					{data.pet}
				</td>
				<td>{data.birthday}</td>
				<td>{data.favoriteColor}</td>
			</tr>
		);
	}
}

export default TableRow;
