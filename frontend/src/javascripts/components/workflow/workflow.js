import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

const mapStateToProps = (state, ownProps) => {
	return ({
		currentTable: R.find(table => table._id == ownProps.currentTableId)(state.dashboardReducer.tables)
	})
};

const mapDispatchToProps = {

};


class Workflow extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<div>
				{console.log(this.props.currentTable, 'props in workflow')}
				<h2>{this.props.currentTable ? this.props.currentTable.name : 'no tabs name'}</h2>
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Workflow);