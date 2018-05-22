// copied from: https://dev.to/loujaybee/using-create-react-app-with-express

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mysql from "mysql";

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.bodyParser());

function query(query, values) {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection({
			host: "localhost",
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
	return file.split("\n").map(line => {
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
			middleInitial: dataOrder[2] ? data[dataOrder[2]] : null, //data[null]
			pet: data[dataOrder[3]],
			birthday: data[dataOrder[4]],
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
		case "C":
			return "Cat";
		case "D":
			return "Dog";
		case "B":
			return "Both";
		default:
			return pet;
	}
}

function formatBirthdayData(birthday) {
	return birthday.split("-").join("/");
}

// API
app.get("/ping", function(req, res) {
	return res.send("pong");
});

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/file-upload", function(req, res) {
	const fileData = req.body.fileData;

	//parse it
});

app.listen(process.env.PORT || 8080);
