import React from 'react'
import { Icon } from 'semantic-ui-react'


import { fieldIcons } from "../../../../../../configuration/fieldTypes";
import './recordCell.scss'

const RecordCell = ({position, fields, data, stackField}) => {
	if (position === 0 && fields[position].type === 'text' && data) {
		return (
			<div className='record_name'>{data}</div>
		)
	} else if (position === 0) {
		return (
			<div className='record_name fade'>Unnamed record</div>
		)
	}
	if (!data || R.path(['idx'], stackField) === position) return (<div/>)

	switch(fields[position].type) {
		default:
			return (<div className='field_wrapper'>
						<div className='field'>
							<Icon name={fieldIcons[fields[position].type]}/>
							{fields[position].name}</div>
						<div className='data'>{data}</div>
					</div>)
	}
}

export default RecordCell