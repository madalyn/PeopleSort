import React, { Component } from "react";

class TableRow extends Component {
	getPetImage() {
		const pet = this.props.data.pet;

		switch (pet) {
			case "C":
				return "/images/cat.png";
			case "D":
				return "/images/dog.png";
			case "B":
				return "/images/both.png";
			default:
				return "";
		}
	}

	/**
	 * DB currently stores these in single chars. Map them here to what we want to display.
	 */
	formatPetData(pet) {
		switch (pet) {
			case "C":
				return "Cat";
			case "D":
				return "Dog";
			case "B":
				return "Both";
			case "N":
				return "None";
			default:
				return pet;
		}
	}

	/**
	 * Take the date currently in sql format and create a string in the desired display format
	 */
	formatBirthdayData(birthday) {
		// easiest to use a date object to get the correct pieces of data
		const date = new Date(birthday);
		return (
			(date.getMonth() + 1).toString() +
			"/" +
			date.getDate().toString() +
			"/" +
			date.getFullYear().toString()
		);
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
					{this.formatPetData(data.pet)}
				</td>
				<td>{this.formatBirthdayData(data.birthday)}</td>
				<td>{data.favoriteColor}</td>
			</tr>
		);
	}
}

export default TableRow;
