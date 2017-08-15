import React from 'react';
import { Input } from 'semantic-ui-react';
import R from 'ramda';


const RecordItem = ({ record_data = ['first', 'second', 'third'] }) => (
	<div>
		{R.map( (value) => <Input defaultValue={value}/>)(record_data)}
	</div>
);

export default RecordItem;