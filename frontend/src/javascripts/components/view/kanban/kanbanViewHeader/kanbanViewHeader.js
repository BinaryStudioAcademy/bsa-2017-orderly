import React from 'react'
import { Icon, Button } from 'semantic-ui-react'

import {viewIcons} from '../../../configuration/viewTypes';
import ExtraMenu from '../../form/formViewHeader/headerMenu/extraMenu'
import './kanbanViewHeader.scss'

const KanbanViewHeader = ({deleteView, viewsCount, table}) => (
	<div className='kanban_view_header'>
		<Icon name={viewIcons.kanban} size='large'/>
		<span>Kanban View</span>
		<Button.Group>
			<Button basic>
				<Icon name='checkmark box'/>
				<span className="menu__text">Stacked by</span>
			</Button>
			<Button basic>
				<Icon name='cogs'/>
				<span className="menu__text">Customize cards</span>
			</Button>
			<Button basic icon='external'/>
			<ExtraMenu
				deleteView={deleteView}
				viewsCount={viewsCount}
			/>
		</Button.Group>
		<Icon name="search" id="kanban_search" size='large'/>
	</div>
)

export default KanbanViewHeader