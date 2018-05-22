import React, { Component } from "react";
import "../stylesheets/fileUploader.css";

class FileUploader extends Component {
	render() {
		return (
			<div className="fileUploader">
				<span>Import a file</span>
				<div className="fileContainer">
					<span class="fileArea">Testing</span>
					<span class="browseButton">Browse</span>
					<input type="file" onChange={this.props.handleFileUpload} />
				</div>
			</div>
		);
	}
}

export default FileUploader;
