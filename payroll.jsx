import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
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
      defaultSortOrder: 'desc',  // default sort order,
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '15', value: 15
      }, {
        text: '50', value: 50
      }, {
        text: 'All', value: fakeData[this.state.muniToDisplay][this.state.departmentToDisplay].length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 15,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
    };
  }

  render() {
    return(
      <div>
        <select onChange={ e => this.setState({muniToDisplay: e.target.value})}>
          <option value="anchorage">Anchorage</option>
          <option value="fairbanks">Fairbanks</option>
          <option value="seward">Seward</option>
        </select>
        <select onChange={e => this.setState({departmentToDisplay: e.target.value})}>
          <option value="mayor">Mayor's Office</option>
          <option value="health">Health</option>
          <option value="sanitation">Sanitation</option>
        </select>

        <BootstrapTable
          headerStyle={ { width: '100%' } }
          bodyStyle={ { width: '100%' } }
          data={fakeData[this.state.muniToDisplay][this.state.departmentToDisplay]}
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
            filter={ { type: 'TextFilter', delay: 1000 } }
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

const fakeData = {
  anchorage: {
    mayor: [],
    health: [],
    sanitation: []
  },
  fairbanks: {
    mayor: [],
    health: [],
    sanitation: []
  },
  seward: {
    mayor: [],
    health: [],
    sanitation: []
  },
};

for(var i = 0; i < 100; i++) {
  const cities = Object.keys(fakeData);
  const departments = Object.keys(fakeData.anchorage);
  cities.forEach( (city, j) => {
    departments.forEach( (department, k) => {
      fakeData[city][department].push({
        id: i,
        name: faker.name.findName(),
        department: faker.commerce.department(),
        title: faker.name.jobTitle(),
        comp_pre_benefits: (Math.random() * (100000 - 75000) + 75000).toFixed(0),
        total_comp: (Math.random() * (150000 - 100000) + 100000).toFixed(0)
      })
    })
  })
}

ReactDOM.render(
  <Payroll/>,
  document.getElementById('root')
);
