import { connect } from "react-redux";
import FileUploader from "../components/FileUploader";
import addData from "../actions/tableData";

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		handleFileUpload: function(event) {
			readFile(event.target.files[0], dispatch);
		}
	};
}

function readFile(file, dispatch) {
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = function(event) {
		const fileContents = event.target.result;
		fetch("/file-upload", {
			method: "POST",
			headers: { Accept: "application/json", "Content-Type": "application/json" },
			body: JSON.stringify({ fileData: fileContents })
		})
			.then(response => response.json())
			.then(tableData => dispatch(addData(tableData)));
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploader);
