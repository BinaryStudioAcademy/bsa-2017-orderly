import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<h1>Hello</h1>
		);
	}
}

function mapStateToProps(state) {
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(StorageActions,  dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

