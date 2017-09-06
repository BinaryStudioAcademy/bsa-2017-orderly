import React from 'react'
import R from 'ramda'

import RecordItem from './recordItem'
import './records.scss'

const Records = ({records, fields, currentView, tableId}) => (
	<div className='records_wrapper'>
		{R.map(record => <RecordItem key={record._id}
		                             currentView={currentView}
		                             record={record}
		                             fields={fields}
		                             tableId={tableId}/>)(records || [])}
	</div>
)


export default Records