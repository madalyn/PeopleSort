export const SORT_TABLE = "SORT_TABLE";

export default function sortTable(columnName) {
	return {
		type: SORT_TABLE,
		columnName: columnName
	};
}
