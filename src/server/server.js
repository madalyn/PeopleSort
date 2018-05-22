// followed from: https://dev.to/loujaybee/using-create-react-app-with-express

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

// followed from https://github.com/mysqljs/mysql
function query(query, values) {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection({
			host: "localhost",
			port: 8889,
			user: "root",
			password: "root",
			database: "people_sort"
		});

		connection.connect();

		connection.query(query, values, function(error, results) {
			if (error) {
				return reject(error);
			}
			return resolve(results);
		});

		connection.end();
	});
}

// convert the data in the text file to json/array of arrays of rows to insert
// '|', ',', and ' '
// Evelo|Dalila|G|None|Blue|6-3-1968 // date last
// Votraw,Moses,None,Blue,11/13/1964 // date last, no middle initial
// Venessa Mearse U D 3-3-1992 Black // pets as Letters
// db: id, lastName, firstName, middleInitial, pet, birthday, favoriteColor
function parseFileData(file) {
	return file
		.split("\n")
		.filter(line => line !== "")
		.map(line => {
			let splitCharacter;
			let dataOrder;
			if (line.includes("|")) {
				splitCharacter = "|";
				dataOrder = [0, 1, 2, 3, 5, 4];
			} else if (line.includes(",")) {
				splitCharacter = ",";
				dataOrder = [0, 1, null, 2, 4, 3];
			} else if (line.includes(" ")) {
				splitCharacter = " ";
				dataOrder = [0, 1, 2, 3, 4, 5];
			}
			const data = line.split(splitCharacter);

			return {
				lastName: data[dataOrder[0]],
				firstName: data[dataOrder[1]],
				middleInitial: dataOrder[2] !== null ? data[dataOrder[2]] : null, //data[null]
				pet: formatPetData(data[dataOrder[3]]),
				birthday: formatDateData(data[dataOrder[4]]),
				favoriteColor: data[dataOrder[5]]
			};
		});
}

/**
 * Handle the different input types for Pets so it displays the same
 * C -> Cat
 * D -> Dog
 * B -> Both
 * also None = Null
 * TODO: ask about 'N'?
 * TODO: add to backend, assume correct data
 */
function formatPetData(pet) {
	switch (pet) {
		case "Cat":
			return "C";
		case "Dog":
			return "D";
		case "Both":
			return "B";
		case "None":
			return "N";
		default:
			return pet;
	}
}

// TODO: sql yyyy-mm-dd
// m-d-yyyy or m/d/yyyy
function formatDateData(date) {
	let splitCharacter;
	if (date.includes("|")) {
		splitCharacter = "|";
	} else if (date.includes("-")) {
		splitCharacter = "-";
	}

	//if num is a single digit add leading 0
	const dateArray = date.split(splitCharacter);
	let month = dateArray[0] < 10 ? "0" + dateArray[0].toString() : dateArray[0].toString();
	let day = dateArray[1] < 10 ? "0" + dateArray[1].toString() : dateArray[1].toString();
	let year = dateArray[2];

	return new Date(year + "-" + month + "-" + day);
}

// API
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/file-upload", function(req, res) {
	const fileData = req.body.fileData;
	const rowData = parseFileData(fileData);
	query(
		"INSERT into People (lastName, firstName, middleInitial, pet, birthday, favoriteColor) values ?",
		[
			rowData.map(row => [
				row.lastName,
				row.firstName,
				row.middleInitial,
				row.pet,
				row.birthday,
				row.favoriteColor
			])
		]
	).then(result => {
		res.json(rowData.map((row, i) => Object.assign({}, row, { id: result.insertId + i })));
	});
});

app.get("/table-data", function(req, res) {
	query(
		"SELECT id, lastName, firstName, middleInitial, pet, birthday, favoriteColor from People"
	).then(result => res.json(result));
});

app.listen(process.env.PORT || 8080);
