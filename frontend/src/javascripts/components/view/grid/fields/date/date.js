import React from 'react';
import './date.scss';
import { Input } from 'semantic-ui-react';
import Datetime from 'react-datetime';

const DateField = () => (
    <div className="date-input-wrapper"> 
        <Datetime 
            autoFocus={true}
        />
    </div>
);

export default DateField;