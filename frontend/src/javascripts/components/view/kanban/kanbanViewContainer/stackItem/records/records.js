import React from 'react'


import RecordItem from './recordItem'
import './records.scss'

const Records = ({records, fields, currentView, tableId, stackField, stackTitle}) => {

	return (
		<div className='records_wrapper'>
			{R.map(record => <RecordItem key={record._id}
			                             currentView={currentView}
			                             record={record}
			                             fields={fields}
			                             stackTitle={stackTitle}
			                             stackField={stackField}
			                             tableId={tableId}/>)(records || [])}
		</div>
	)
}


export default Records