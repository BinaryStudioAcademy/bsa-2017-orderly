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
        this.state = { 
            date: '',
            format:'#MM#/#DD#/#YYYY#'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            format: nextProps.currentField.options.date
        });
    }

    handleChange(event){
        this.setState({date: new Date(Date.parse(event._d)).customFormat(this.state.format)});
    }

    renderActiveField() {
        return(
        <div className="date-input-wrapper"> 
            <Datetime
                value={this.state.date}
                timeFormat={false}
                onChangeEvent={this.handleChange.bind(this)}       
                onBlur={(event) => {this.props.onBlurComponent(this.props.id, new Date(Date.parse(event._d)).customFormat(this.state.format))}}   
                autoFocus={true}
            />
        </div>
        );
    }
}

export default DateField;