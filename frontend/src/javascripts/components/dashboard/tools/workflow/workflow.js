import React from 'react';

const Workflow = ({table}) => (
    <h2>
        {table && table._id !== 0 ? table.name : 'no table yet'}
    </h2>
);

export default Workflow;