import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import R from 'ramda'

import StackItem from './stackItem/stackItem'
import './kanbanViewContainer.scss'

const mapIndexed = R.addIndex(R.map)

const createFieldStackObj = (field, idx) => {
	return {
		idx: idx,
		fieldObj: field
	}
}

const defaultToZero = R.defaultTo({field: 0})

class KanbanViewContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const fieldIdStacked = R.compose(R.prop('field'), defaultToZero, R.find(R.prop('isStacked'))) (this.props.view.fields_config)
		const stackField = R.compose(R.find(field => field.fieldObj._id === fieldIdStacked), mapIndexed(createFieldStackObj))(this.props.table.fields || [])
		console.log(stackField, 'viewdfdfdfdfddf')
		return (
			<div className='kanban_workflow'>
				<div className='kanban_stack'>
					<StackItem currentViewId={this.props.currentViewId}
					           name={'Uncategorized'}
					           table={this.props.table} />
					{R.map(nameStack => <StackItem currentViewId={this.props.currentViewId}
					                               name={nameStack}
				                                   table={this.props.table}
						/>)(fieldIdStacked ? stackField.fieldObj.options.select : [])}
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
