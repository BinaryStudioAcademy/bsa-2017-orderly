import React from 'react';

const Workflow = ({table}) => (
    <h2>
        {table || table._id ? table.name : 'no table yet'}
    </h2>
);

export default Workflow;