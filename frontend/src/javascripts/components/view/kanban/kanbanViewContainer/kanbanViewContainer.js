import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

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
					<StackItem currentViewId={this.props.currentViewId}
					           table={this.props.table} />

					<div className='add_stack'>
						<span className='new_stack'>
							<Icon name='plus'/>
							New stack</span>
					</div>
				</div>
			</div>
		)
	}
}

export default KanbanViewContainer
