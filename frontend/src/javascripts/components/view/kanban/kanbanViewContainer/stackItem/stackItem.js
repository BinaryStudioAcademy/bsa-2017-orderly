import React from 'react'
import { Button } from 'semantic-ui-react'

import { findCurrentView } from '../../../viewService'
import Records from './records/records'
import './stackItem.scss'

const StackItem = ({table, currentViewId}) => (
	<div className='stack_item'>
		<div className='stack_header'>Uncategorized</div>
		<div className='stack_records'>
			<Records records={table.records}
			         fields={table.fields}
			         currentView={findCurrentView(currentViewId, table.views)}
			         tableId={table._id}/>
		</div>
		<div className='stack_footer'>
			<Button circular color='orange' icon='plus' size='tiny'/>
		</div>
	</div>
)

export default StackItem