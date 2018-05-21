import { connect } from "react-redux";
import PeopleCount from "../components/PeopleCount";

function mapStateToProps(state) {
	return {
		peopleCount: state.tableData.length
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCount);
