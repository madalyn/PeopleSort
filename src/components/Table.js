import React, { Component } from "react";
import TableRow from "./TableRow";
import "../stylesheets/table.css";

/*
Runyon|Yoshie|H|Cat|Red|10-15-1979
Turja|Tenesha|C|Both|Green|2-3-1985
Evelo|Dalila|G|None|Blue|6-3-1968
*/

class Table extends Component {
  componentDidMount() {
    fetch("/table-data")
      .then(response => response.json())
      .then(tableData => this.props.populateTableData(tableData));
  }
  render() {
    const tableHeaders = {};
    tableHeaders["lastName"] = "Last Name";
    tableHeaders["firstName"] = "First Name";
    tableHeaders["middleInitial"] = "Middle Initial";
    tableHeaders["pet"] = "Pet";
    tableHeaders["birthday"] = "Birthday";
    tableHeaders["favoriteColor"] = "Favorite Color";

    return (
      <table>
        <thead>
          <tr>
            {Object.keys(tableHeaders).map(key => (
              <th
                className={this.props.sortedColumn === key ? "selectedHeader" : ""}
                onClick={this.props.createSortHandler(key)}
              >
                {tableHeaders[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{this.props.tableData.map(data => <TableRow key={data.id} data={data} />)}</tbody>
      </table>
    );
  }
}

export default Table;
