import React from 'react';
import { connect } from 'react-redux';
import { addTableToBaseById } from './dashboardActions';

class GenerateTable extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    const addTableToBase = props.addTableToBase;
  }
  componentWillMount() {
    console.log(this.props.params.baseId)
      this.props.addTableToBase(this.props.params.baseId);
  }

  render() {
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   addTableToBase: (baseId) => { dispatch(addTableToBaseById(baseId))}
 }
}

GenerateTable = connect(
    null,
    mapDispatchToProps
)(GenerateTable);


export default GenerateTable 