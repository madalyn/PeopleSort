import React, { Component } from "react";
import logo from "../logo.svg";
import Table from "../containers/Table";
import PeopleCount from "../containers/PeopleCount";
import FileUploader from "../containers/FileUploader";
import "../stylesheets/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <PeopleCount />
          <FileUploader />
        </div>
        <Table />
      </div>
    );
  }
}

export default App;
