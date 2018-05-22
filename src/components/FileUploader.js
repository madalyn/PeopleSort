import React, { Component } from "react";

class FileUploader extends Component {
	render() {
		return <input type="file" onChange={this.props.handleFileUpload} />;
	}
}

export default FileUploader;
