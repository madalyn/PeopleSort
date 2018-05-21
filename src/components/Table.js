import React, { Component } from "react";
import TableRow from "./TableRow";

/*
Runyon|Yoshie|H|Cat|Red|10-15-1979
Turja|Tenesha|C|Both|Green|2-3-1985
Evelo|Dalila|G|None|Blue|6-3-1968
*/

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <th onClick={this.props.createSortHandler("lastName")}>
            Last Name {this.props.sortedColumn === "lastName" ? "*" : ""}
          </th>
          <th onClick={this.props.createSortHandler("firstName")}>
            First Name {this.props.sortedColumn === "firstName" ? "*" : ""}
          </th>
          <th onClick={this.props.createSortHandler("middleInitial")}>
            Middle Initial {this.props.sortedColumn === "middleInitial" ? "*" : ""}
          </th>
          <th onClick={this.props.createSortHandler("pet")}>
            Pet {this.props.sortedColumn === "pet" ? "*" : ""}
          </th>
          <th onClick={this.props.createSortHandler("birthday")}>
            Birthday {this.props.sortedColumn === "birthday" ? "*" : ""}
          </th>
          <th onClick={this.props.createSortHandler("favoriteColor")}>
            Favorite Color {this.props.sortedColumn === "favoriteColor" ? "*" : ""}
          </th>
        </tr>
        {this.props.tableData.map(data => <TableRow data={data} />)}
      </table>
    );
  }
}

export default Table;
