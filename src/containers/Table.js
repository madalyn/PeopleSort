import { connect } from "react-redux";
import Table from "../components/Table";
import sortTable from "../actions/sortTable";

function mapStateToProps(state) {
	return {
		sortedColumn: state.sortedColumn
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createSortHandler: columnName => () => {
			dispatch(sortTable(columnName));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
