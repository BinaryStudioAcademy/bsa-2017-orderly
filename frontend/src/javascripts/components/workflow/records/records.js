import React from 'react';
import R from 'ramda';

import RecordItem from './recordItem/recordItem'


const Record = (record) => (
	<div className='records_row'>
		{ R.map(RecordItem)(record.record_data) }
	</div>
);

export default Record;