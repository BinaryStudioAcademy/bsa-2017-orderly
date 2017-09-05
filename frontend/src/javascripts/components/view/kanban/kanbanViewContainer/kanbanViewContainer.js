import React, { Component } from 'react'

import StackItem from './stackItem/stackItem'
import './kanbanViewContainer.scss'

class KanbanViewContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='kanban_workflow'>
				<div className='kanban_stack'>
					<StackItem table={this.props.table} />
				</div>
			</div>
		)
	}
}

export default KanbanViewContainer
