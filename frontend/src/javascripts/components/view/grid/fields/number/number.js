import React from 'react';
import { Input } from 'semantic-ui-react';
import Field from '../field';
import './number.scss';

class Number extends Field {
    constructor(props){
        super(props, 'text-line');

        this.changeHandler = this.changeHandler.bind(this);
        this.keyPressHandler = this.keyPressHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.processValue = this.processValue.bind(this);
        this.defaultValue = this.props.value;
    }

    changeHandler(event, value) {
        let regExp;
        const isInteger = false;
        if (isInteger) {
            regExp = /^-?[0-9\b]+$/;
        } else {
            regExp = /^-?\d+(\.\d*)?$/;
        }
        if (value === '' || regExp.test(value)) {
            this.defaultValue = value;
        } else {
            event.target.value = this.defaultValue;
        }
    }

    keyPressHandler(id, event) {
        if (this.props.active && (event.charCode === 13)) {
            event.target.value = this.processValue(event.target.value);
        }
        this.props.onKeyPress(id, event);
    }

    blurHandler(id, value){
        this.props.onBlurComponent(id, this.processValue(value));
    }

    processValue(value) {
        const isInteger = false;
        const precisionValue = 2;
        if (!isInteger) {
            let n = +value;
            return n.toFixed(precisionValue);
        }
        return value;
    }

    renderActiveField() {
        return <Input
            onChange={(event) => {this.changeHandler(event, event.target.value)}}
            onBlur={(event) => this.blurHandler(this.props.id, event.target.value)}
            defaultValue={this.props.value}
            type='text'
            autoFocus={this.props.autoFocus}
        />;
    }
}

export default Number;