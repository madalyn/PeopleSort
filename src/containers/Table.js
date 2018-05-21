import { connect } from "react-redux";
import Table from "../components/Table";
import sortTable from "../actions/sortTable";

function mapStateToProps(state) {
	return {
		sortedColumn: state.sortTable.sortedColumn,
		tableData: state.sortTable.sortedColumn
			? sort(state.tableData, state.sortTable.sortedColumn)
			: state.tableData
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createSortHandler: columnName => () => {
			dispatch(sortTable(columnName));
		}
	};
}

/**
 * Determine which sort to use based on type of data in column
 */
function sort(tableData, columnName) {
	if (columnName === "birthday") {
		return sortByDate(tableData, columnName);
	}
	return sortAlphabetically(tableData, columnName);
}

// need to sort the different columns
// alphabetically and by Date
// TODO: if strings are the same, shall we check the next column?
function sortAlphabetically(tableData, columnName) {
	return tableData.sort((a, b) => a[columnName].localeCompare(b[columnName]));
}

// sort by date
function sortByDate(tableData, columnName) {
	return tableData.sort((a, b) => {
		let dateA = convertStringToDateObject(a[columnName]);
		let dateB = convertStringToDateObject(b[columnName]);
		return dateA - dateB;
	});
}

/**
 * Given a string that is a date in one of two formats:
 * 6-3-1968
 * 6/3/1968
 * convert it to a Date object
 */
function convertStringToDateObject(dateString) {
	dateString.split("/").join("-");
	return new Date(dateString);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
