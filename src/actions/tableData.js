export const ADD_DATA = "ADD_DATA";

export default function addData(tableData) {
	return {
		type: ADD_DATA,
		tableData: tableData
	};
}
