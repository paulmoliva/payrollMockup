import React from 'react';
import ReactDOM from 'react-dom';

class Payroll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <p>Hey it works really good</p>
    );
  }
}

ReactDOM.render(
  <Payroll/>,
  document.getElementById('root')
);
