import { SORT_TABLE } from "../actions/sortTable";

export default function sortTable(state = {}, action) {
	if (action.type === SORT_TABLE) {
		return { sortedColumn: action.columnName };
	}

	return state;
}
