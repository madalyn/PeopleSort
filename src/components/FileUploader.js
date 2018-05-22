import React, { Component } from "react";
import "../stylesheets/fileUploader.css";

class FileUploader extends Component {
	render() {
		return (
			<div className="fileUploader">
				<span>Import a File</span>
				<input type="file" onChange={this.props.handleFileUpload} />
			</div>
		);
	}
}

export default FileUploader;
