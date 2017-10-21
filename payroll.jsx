import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Payroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToDisplay: anchorageMayorPayroll
    }
  }

  render() {
    return(
      <div>
        <select>
          <option value="anchorage">Anchorage</option>
          <option value="fairbanks">Fairbanks</option>
        </select>
        <select>
          <option value="mayor">Mayor's Office</option>
          <option value="health">Health</option>
        </select>

        <BootstrapTable
          headerStyle={ { width: '100%' } }
          bodyStyle={ { width: '100%' } }
          data={this.state.dataToDisplay}
          hover={true}
          pagination={true}
        >
          <TableHeaderColumn
            dataField="id" isKey={true}
            hidden>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            filter={ { type: 'TextFilter', delay: 1000 } }
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="department"
          >
            Department
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="title"
            filter={ { type: 'TextFilter', delay: 1000 } }
          >
            Title
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="comp_pre_benefits"
            dataSort={true}
          >
            Compensation before benefits
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="total_comp"
            dataSort={true}
          >
            Total Compensation
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const anchorageMayorPayroll = [
  {
    id: 1,
    name: "Ethan Berkowitz",
    department: "Mayor's Office",
    title: "Mayor",
    comp_pre_benefits: 100000,
    total_comp: 150000
  },
  {
    id: 2,
    name: "John Kelly",
    department: "Mayor's Office",
    title: "Chief of Staff",
    comp_pre_benefits: 130000,
    total_comp: 180000
  },
  {
    id: 3,
    name: "Cindy Louhoo",
    department: "Mayor's Office",
    title: "Special Assistant",
    comp_pre_benefits: 90000,
    total_comp: 160000
  },
  {
    id: 4,
    name: "Larry David",
    department: "Mayor's Office",
    title: "Special Assistant",
    comp_pre_benefits: 80000,
    total_comp: 130000
  },
  {
    id: 5,
    name: "Kelly Meyer",
    department: "Mayor's Office",
    title: "Project Manager",
    comp_pre_benefits: 170000,
    total_comp: 220000
  },
  {
    id: 6,
    name: "Mike Koslowski",
    department: "Mayor's Office",
    title: "Project Assistant",
    comp_pre_benefits: 70000,
    total_comp: 120000
  },
  {
    id: 7,
    name: "Jim Kuhn",
    department: "Mayor's Office",
    title: "Intern",
    comp_pre_benefits: 20000,
    total_comp: 20000
  },
];

ReactDOM.render(
  <Payroll/>,
  document.getElementById('root')
);
