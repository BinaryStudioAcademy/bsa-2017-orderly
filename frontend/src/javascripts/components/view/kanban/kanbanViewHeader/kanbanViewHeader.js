import React, { Component } from 'react'
import { Icon, Button } from 'semantic-ui-react'
import R from 'ramda'

import { findCurrentView } from '../../viewService'
import { viewIcons } from '../../../configuration/viewTypes';
import ExtraMenu from '../../form/formViewHeader/headerMenu/extraMenu'
import './kanbanViewHeader.scss'



class KanbanViewHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isStackedModalOpen: false
		}
	}

	stackedBy(currentViewId, table) {
		const view = findCurrentView(currentViewId, table.views)
		R.compose(console.log, R.find(R.propEq('isStacked', false)))(view.fields_config)
	}

	render() {
		return (
			<div className='kanban_view_header'>
				<Icon name={viewIcons.kanban} size='large'/>
				<span>Kanban View</span>
				<Button.Group>
					<Button basic onClick={() => {this.stackedBy(this.props.currentViewId, this.props.table)}}>
						<Icon name='checkmark box'/>
						<span className="menu__text">Stacked by</span>
					</Button>
					<Button basic>
						<Icon name='cogs'/>
						<span className="menu__text">Customize cards</span>
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