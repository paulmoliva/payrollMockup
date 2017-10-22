import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Payroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muniToDisplay: 'anchorage',
      departmentToDisplay: 'mayor'
    };
    this.options = {
      defaultSortName: 'total_comp',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
  }

  render() {
    return(
      <div>
        <select onChange={ e => this.setState({muniToDisplay: e.target.value})}>
          <option value="anchorage">Anchorage</option>
          <option value="fairbanks">Fairbanks</option>
        </select>
        <select onChange={e => this.setState({departmentToDisplay: e.target.value})}>
          <option value="mayor">Mayor's Office</option>
          <option value="health">Health</option>
        </select>

        <BootstrapTable
          headerStyle={ { width: '100%' } }
          bodyStyle={ { width: '100%' } }
          data={mockedData[this.state.muniToDisplay][this.state.departmentToDisplay]}
          hover={true}
          options={this.options}
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

const mockedData =
  {
    anchorage: {
      mayor:  [
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
        }
      ],
      health:  [
        {
          id: 1,
          name: "Bob Smith",
          department: "Health",
          title: "Director",
          comp_pre_benefits: (Math.random() * (120000 - 100000) + 100000).toFixed(0),
          total_comp: 145000
        },
        {
          id: 2,
          name: "John Wayne",
          department: "Health",
          title: "Chief of Staff",
          comp_pre_benefits: (Math.random() * (150000 - 120000) + 120000).toFixed(0),
          total_comp: 170000
        },
        {
          id: 3,
          name: "Cameron Diaz",
          department: "Health",
          title: "Special Assistant",
          comp_pre_benefits: (Math.random() * (120000 - 100000) + 100000).toFixed(0),
          total_comp: 130000
        },
        {
          id: 4,
          name: "David Boyle",
          department: "Health",
          title: "Special Assistant",
          comp_pre_benefits: (Math.random() * (110000 - 80000) + 80000).toFixed(0),
          total_comp: 120000
        },
        {
          id: 5,
          name: "Billy Farrell",
          department: "Health",
          title: "Project Manager",
          comp_pre_benefits: (Math.random() * (200000 - 180000) + 180000).toFixed(0),
          total_comp: 240000
        },
        {
          id: 6,
          name: "Jim Johnson",
          department: "Health",
          title: "Project Assistant",
          comp_pre_benefits: (Math.random() * (100000 - 75000) + 75000).toFixed(0),
          total_comp: 140000
        },
        {
          id: 7,
          name: "Betty Krocker",
          department: "Health",
          title: "Intern",
          comp_pre_benefits: (Math.random() * (15000 - 18000) + 18000).toFixed(0),
          total_comp: 30000
        }
      ]
    },
    fairbanks: {
      mayor:  [
        {
          id: 1,
          name: "Karl Kassel",
          department: "Mayor's Office",
          title: "Mayor",
          comp_pre_benefits: 100000,
          total_comp: 150000
        },
        {
          id: 2,
          name: "Donald Trump",
          department: "Mayor's Office",
          title: "Chief of Staff",
          comp_pre_benefits: 130000,
          total_comp: 180000
        },
        {
          id: 3,
          name: "Kelly Conway",
          department: "Mayor's Office",
          title: "Special Assistant",
          comp_pre_benefits: 90000,
          total_comp: 160000
        },
        {
          id: 4,
          name: "Barack Obama",
          department: "Mayor's Office",
          title: "Special Assistant",
          comp_pre_benefits: 80000,
          total_comp: 130000
        },
        {
          id: 5,
          name: "Ronald Reagan",
          department: "Mayor's Office",
          title: "Project Manager",
          comp_pre_benefits: 170000,
          total_comp: 220000
        },
        {
          id: 6,
          name: "Jerry Jones",
          department: "Mayor's Office",
          title: "Project Assistant",
          comp_pre_benefits: 70000,
          total_comp: 120000
        },
        {
          id: 7,
          name: "Hugh Hefner",
          department: "Mayor's Office",
          title: "Intern",
          comp_pre_benefits: 20000,
          total_comp: 20000
        }
      ],
      health:  [
        {
          id: 1,
          name: "Johnny Rocket",
          department: "Health",
          title: "Director",
          comp_pre_benefits: (Math.random() * (120000 - 100000) + 100000).toFixed(0),
          total_comp: 145000
        },
        {
          id: 2,
          name: "John Wayne",
          department: "Health",
          title: "Chief of Staff",
          comp_pre_benefits: (Math.random() * (150000 - 120000) + 120000).toFixed(0),
          total_comp: 170000
        },
        {
          id: 3,
          name: "Cameron Diaz",
          department: "Health",
          title: "Special Assistant",
          comp_pre_benefits: (Math.random() * (120000 - 100000) + 100000).toFixed(0),
          total_comp: 130000
        },
        {
          id: 4,
          name: "David Boyle",
          department: "Health",
          title: "Special Assistant",
          comp_pre_benefits: (Math.random() * (110000 - 80000) + 80000).toFixed(0),
          total_comp: 120000
        },
        {
          id: 5,
          name: "Billy Farrell",
          department: "Health",
          title: "Project Manager",
          comp_pre_benefits: (Math.random() * (200000 - 180000) + 180000).toFixed(0),
          total_comp: 240000
        },
        {
          id: 6,
          name: "Jim Johnson",
          department: "Health",
          title: "Project Assistant",
          comp_pre_benefits: (Math.random() * (100000 - 75000) + 75000).toFixed(0),
          total_comp: 140000
        },
        {
          id: 7,
          name: "Betty Krocker",
          department: "Health",
          title: "Intern",
          comp_pre_benefits: (Math.random() * (15000 - 18000) + 18000).toFixed(0),
          total_comp: 30000
        }
      ]
    }
  }


ReactDOM.render(
  <Payroll/>,
  document.getElementById('root')
);
