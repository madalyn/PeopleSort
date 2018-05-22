import sortTable from "./sortTable";
import tableData from "./tableData";

export default function rootReducer(state = {}, action) {
	return {
		tableData: tableData(state.tableData, action),
		sortTable: sortTable(state.sortTable, action)
	};
}
