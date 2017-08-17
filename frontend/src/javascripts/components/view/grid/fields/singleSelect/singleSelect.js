import React from 'react';
import './singleSelect.scss'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'An', value: 'AT', text: 'Ananas' }
];

const SingleSelect = () => (
    <div className="single-select-container"> 
        <Dropdown search selection options={options} />
    </div>

);

export default SingleSelect;