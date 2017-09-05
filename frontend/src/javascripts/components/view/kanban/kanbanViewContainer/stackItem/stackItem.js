import React from 'react'
import { Button } from 'semantic-ui-react'

import Records from './records/records'
import './stackItem.scss'

const StackItem = ({table}) => (
	<div className='stack_item'>
		<div className='stack_header'>Uncategorized</div>
		<div className='stack_records'>
			<Records table={table}/>
		</div>
		<div className='stack_footer'>
			<Button circular color='orange' icon='plus' size='tiny'/>
		</div>
	</div>
)

export default StackItem