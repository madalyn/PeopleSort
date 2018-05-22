import { connect } from "react-redux";
import Table from "../components/Table";
import sortTable from "../actions/sortTable";
import addData from "../actions/tableData";

function mapStateToProps(state) {
	return {
		sortedColumn: state.sortTable.sortedColumn,
		tableData: state.sortTable.sortedColumn
			? sort(state.tableData, state.sortTable.sortedColumn, state.sortTable.isAscending)
			: state.tableData
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createSortHandler: columnName => () => {
			dispatch(sortTable(columnName));
		},
		populateTableData: tableData => {
			dispatch(addData(tableData));
		}
	};
}

/**
 * Determine which sort to use based on type of data in column
 */
function sort(tableData, columnName, isAscending) {
	let result;
	if (columnName === "birthday") {
		result = sortByDate(tableData, columnName);
	} else {
		result = sortAlphabetically(tableData, columnName);
	}

	if (!isAscending) {
		return result.slice(0).reverse();
	}
	return result;
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
