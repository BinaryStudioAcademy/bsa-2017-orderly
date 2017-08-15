import React, { Component } from 'react';
import R from 'ramda';

import Record from './records/records';

// const Workflow = ({table}) => (
//     <h2>
//         {table && table._id !== 0 ? table.name : 'no table yet'}
//     </h2>
// );
//todo replace cap-data

let tableCap = {
    records: [
        {
            id: 12,
	        record_data: []
        },
        {
            id: 13,
            record_data: []
        }
    ]
}

const Workflow = (table) => (
    <div>
        {console.log(table, '--------------------')}
        {/*{R.map( (record) => Record(record))(table.records)}*/}
    </div>
);

export default Workflow;