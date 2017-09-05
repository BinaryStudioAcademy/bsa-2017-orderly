import React from 'react'
import R from 'ramda'

import RecordItem from './recordItem'
import './records.scss'

const Records = ({table}) => (
	<div>
		{R.map(record => <RecordItem record={record}
		                             table={table}/>)(table.records || [])}
	</div>
)


export default Records