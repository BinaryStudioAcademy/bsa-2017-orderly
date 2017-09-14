import React from 'react'


import RecordCell from './recordCell/recordCell'
import './recordItem.scss'

const RecordItem = ({record, tableId, fields, currentView, stackField, stackTitle}) => {
	let counter = 0;
	const idx = R.path(['idx'], stackField)
	const data = R.path(['record_data'], record)
	const stackFieldValue = R.path([idx, 'data'], data)
	if (stackTitle === stackFieldValue) {
		return (
			<div className='record_item'>
				{R.map(data => <RecordCell key={data._id}
				                           position={counter++}
				                           fields={fields}
				                           stackField={stackField}
				                           data={data.data}/>)(record.record_data || [])}
			</div>
		)
	}
	if (stackFieldValue) {
		return (<div/>)
	}
	if (stackField && stackTitle === 'Uncategorized') {
		return (<div className='record_item'>
			{R.map(data => <RecordCell key={data._id}
			                           position={counter++}
			                           fields={fields}
			                           stackField={stackField}
			                           data={data.data}/>)(record.record_data || [])}
		</div>)
	} else return (<div/>)

}

export default RecordItem