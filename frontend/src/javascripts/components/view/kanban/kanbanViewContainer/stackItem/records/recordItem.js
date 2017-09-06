import React from 'react'
import R from 'ramda'

import RecordCell from './recordCell/recordCell'
import './recordItem.scss'

const RecordItem = ({record, tableId, fields, currentView}) => {
	console.log(currentView, 'viewsssssssssssssssss')
	console.log(record, 'this is recorddfsdfsdfdsfsdfsd')
	console.log(fields, 'fieeeeeeeeeeeeelds')
	let counter = 0;
	return (
		<div className='record_item'>
			{R.map(data => <RecordCell key={data._id}
			                           position={counter++}
			                           fields={fields}
			                           data={data.data}/>)(record.record_data || [])}
		</div>
	)
}

export default RecordItem