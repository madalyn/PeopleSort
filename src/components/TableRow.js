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

	// TODO: sql yyyy-mm-dd
	// m-d-yyyy or m/d/yyyy
	formatBirthdayData(birthday) {
		//return birthday.split("-").join("/");
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
