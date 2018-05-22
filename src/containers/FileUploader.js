import { connect } from "react-redux";
import FileUploader from "../components/FileUploader";

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

function readFile(file) {
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = 
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploader);
