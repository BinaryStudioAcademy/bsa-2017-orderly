import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as kanbanViewActions from './kanbanViewActions'
import KanbanViewHeader from './kanbanViewHeader/kanbanViewHeader'
import KanbanViewContainer from './kanbanViewContainer/kanbanViewContainer'
import './kanbanView.scss'

class KanbanView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props, 'kanban propssssssssssssssss')

		return (
			<div className='kanban_view_wrapper_page'>
				<KanbanViewHeader table={this.props.currentTable}
				                  deleteView={this.props.deleteView}
				                  viewsCount={this.props.viewsCount} />
				<KanbanViewContainer currentViewId={this.props.currentViewId}
				                     table={this.props.currentTable}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	kanbanView: state.kanbanView
})


const mapDispatchToProps = (dispatch) => bindActionCreators(kanbanViewActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KanbanView)