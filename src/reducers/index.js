import sortTable from "./sortTable";

const tableData = [
	{
		lastName: "Coryea",
		firstName: "Madalyn",
		middleInitial: "E",
		pet: "Dog",
		birthday: "7/27/1992",
		favoriteColor: "green"
	},
	{
		lastName: "Ripley",
		firstName: "Wesley",
		middleInitial: "J",
		pet: "Dog",
		birthday: "11/15/1991",
		favoriteColor: "purple"
	},
	{
		lastName: "Coryea",
		firstName: "Samantha",
		middleInitial: "P",
		pet: "None",
		birthday: "5/15/1997",
		favoriteColor: "pink"
	},
	{
		lastName: "Adam",
		firstName: "Wames",
		middleInitial: "A",
		pet: "C",
		birthday: "1/5/2001",
		favoriteColor: "orange"
	},
	{
		lastName: "Coryea",
		firstName: "Joshua",
		middleInitial: "A",
		pet: "D",
		birthday: "8-7-1995",
		favoriteColor: "yellow"
	}
];

export default function rootReducer(state = {}, action) {
	return { tableData: tableData, sortTable: sortTable(state.sortTable, action) };
}
