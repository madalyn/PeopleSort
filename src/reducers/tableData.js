import { ADD_DATA } from "../actions/tableData";

export default function tableData(state = [], action) {
	if (action.type === ADD_DATA) {
		return state.concat(action.tableData);
	}

	return state;
}
