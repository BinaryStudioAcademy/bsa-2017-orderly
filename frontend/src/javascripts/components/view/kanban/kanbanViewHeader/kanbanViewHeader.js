import React, { Component } from 'react'
import { Icon, Button } from 'semantic-ui-react'
import R from 'ramda'

import { findCurrentView } from '../../viewService'
import { viewIcons } from '../../../configuration/viewTypes'
import StackedModal from './modals/stackedModal'
import ExtraMenu from '../../form/formViewHeader/headerMenu/extraMenu'
import './kanbanViewHeader.scss'

const getStackedFields = (tables) => R.filter(R.propEq('type', 'select'))(tables.fields)

class KanbanViewHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isStackedModalOpen: false
		}
	}

	openStackModal = () => {this.setState({isStackedModalOpen: true})}

	closeStackModal = () => {this.setState({isStackedModalOpen: false})}

	chooseStackedField = (fieldId) => {
		const view = R.clone(findCurrentView(this.props.currentViewId, this.props.table.views))
		const fieldsFalse = R.compose(R.map(R.set(R.lensProp('isStacked'), false)))(view.fields_config)
		// console.log(this.props.table.fields, 'fieldsssssssssssssssssssssss')
		// console.log(view, 'vieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeew')
		view.fields_config = R.map(field => {
			console.log(field.field, fieldId, '======================')
			if (field.field === fieldId) return R.set(R.lensProp('isStacked'), true, field)
			return field
		})(fieldsFalse)
		// this.props.updateKanbanView(view, this.props.table._id)
	}

	render() {
		return (
			<div className='kanban_view_header'>
				<Icon name={viewIcons.kanban} size='large'/>
				<span>Kanban View</span>
				<Button.Group>
					<Button basic onClick={this.openStackModal}>
						<Icon name='checkmark box'/>
						<span className="menu__text">Stacked by</span>
					</Button>
					<Button basic>
						<Icon name='cogs'/>
						<span className="menu__text">Customize cards</span>
						<StackedModal table={this.props.table}
						              view={this.props.view}
						              stackedFields={this.props.table ? getStackedFields(this.props.table) : ''}
						              closeStackModal={this.closeStackModal}
						              chooseStackedField={this.chooseStackedField}
						              isStackedModalOpen={this.state.isStackedModalOpen}/>
					</Button>
					<Button basic icon='external'/>
					<ExtraMenu
						deleteView={this.props.deleteView}
						viewsCount={this.props.viewsCount}
					/>
				</Button.Group>
				<Icon name="search" id="kanban_search" size='large'/>
			</div>
		)
	}
}


export default KanbanViewHeader