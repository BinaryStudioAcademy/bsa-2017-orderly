import React from 'react';
import './fieldSingleSelect.scss'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'An', value: 'AT', text: 'Ananas' }
];

const fieldSingleSelect = () => (
    <div className="single-select-container"> 
        <Dropdown search selection options={options} />
    </div>

);

export default fieldSingleSelect;