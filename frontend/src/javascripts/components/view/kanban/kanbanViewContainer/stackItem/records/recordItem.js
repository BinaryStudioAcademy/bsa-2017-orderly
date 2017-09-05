import React from 'react'

import './recordItem.scss'

const RecordItem = ({record, table}) => {
	console.log(record, 'this is recorddfsdfsdfdsfsdfsd')
	return (
		<div key={record._id}>{record}</div>
	)
}

export default RecordItem