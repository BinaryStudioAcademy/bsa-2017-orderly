import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import Record from './records/records';
import { getRecordsByTableId } from '../dashboard/dashboardActions';

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps, 'workfoooow')
	return ({

	});
}

const mapDispatchToProps = {
	getRecordsByTableId: getRecordsByTableId
}


class Workflow extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<div>
				{console.log(this.props, 'props in workflow')}
				{/*{R.map( (record) => Record(record))(table.records)}*/}
			</div>
		)
	}
}

// const Workflow = (table) => (
//     <div>
//         {console.log(table, '--------------------')}
//         {/*{R.map( (record) => Record(record))(table.records)}*/}
//     </div>
// );

export default connect(mapStateToProps, mapDispatchToProps)(Workflow);