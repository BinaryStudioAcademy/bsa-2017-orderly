import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './kanbanView.scss'

class KanbanView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>Kanban</div>
		)
	}
}

export default KanbanView