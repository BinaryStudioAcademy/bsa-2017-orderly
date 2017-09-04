import React from 'react';
import Field from '../field';
import { Input } from 'semantic-ui-react';
import Datetime from 'react-datetime';
import moment from 'moment';
import './date.scss';
import '../../../../userProfile/userProfileComponents/date.js';

class DateField extends Field {
    constructor(props){
        super(props, 'date');
    }

    renderActiveField() {
        return(
            <div className="date-input-wrapper">
                <Datetime
                    defaultValue={this.props.value}
                    onBlur={(event) => {this.props.onBlurComponent(this.props.id, new Date(Date.parse(event._d)).customFormat( "#MM#/#DD#/#YYYY# #hh#:#mm# #AMPM#" ))}}
                    autoFocus={this.props.autoFocus}
                />
            </div>
        );
    }
}

export default DateField;