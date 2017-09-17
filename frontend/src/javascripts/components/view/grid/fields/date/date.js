import React from 'react';
import Field from '../field';
import { Input } from 'semantic-ui-react';
import Datetime from 'react-datetime';
import './date.scss';
import '../../../../userProfile/userProfileComponents/date.js';

class DateField extends Field {
    constructor(props){
        super(props, 'date');
        this.state = { 
            date: this.props.value? new Date(Date.parse(this.props.value)).customFormat(`${this.props.currentField.options.date.format} ${this.props.currentField.options.date.time?'#hh#:#mm# #AMPM#':''}`):'',
            format:'#MM#/#DD#/#YYYY#', 
            time:'',
            showTime: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            format: nextProps.currentField.options.date.format, 
            time: nextProps.currentField.options.date.time?'#hh#:#mm# #AMPM#':'',
            showTime: nextProps.currentField.options.date.time
        });
    }


    renderActiveField() {   
        return(
        <div className="date-input-wrapper"> 
            <Datetime
                value={this.state.date}
                timeFormat={this.state.showTime}
                onChangeEvent={(event)=>{
                    if (event._d) {
                        this.setState({date: new Date(Date.parse(event._d)).customFormat(`${this.state.format} ${this.state.time}`)})
                        }
                }}       
                onBlur={(event) => {this.props.onBlurComponent(this.props.id, event._d?new Date(Date.parse(event._d)).customFormat(`${this.state.format} ${this.state.time}`):'')}}   
                autoFocus={true}
            />
        </div>
        );
    }
}

export default DateField;