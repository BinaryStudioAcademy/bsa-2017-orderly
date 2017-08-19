import React from 'react';
import { Input } from 'semantic-ui-react';
import Field from '../field';
import './number.scss';

class Number extends Field {
    constructor(props){
        super(props, 'text-line');

        this.changeHandler = this.changeHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.processValue = this.processValue.bind(this);
    }

    changeHandler(id, value) {
        let regExp;
        const isInteger = false;
        if (isInteger) {
            regExp = /^[0-9\b]+$/;
        } else {
            regExp = /^\d+(\.\d*)?$/;
        }
        if (value === '' || regExp.test(value)) {
            this.props.onChange(id, value);
        }
    }

    keyDownHandler(id, event) {
        this.props.onKeyDown(id, event);

        if (this.props.active) {
            if (event.keyCode === 13) {
                this.processValue(id);
            }
        }
    }

    blurHandler(id){
        this.processValue(id);
        this.props.onBlurComponent(id);
    }

    processValue(id) {
        const isInteger = false;
        const precisionValue = 2;
        if (!isInteger) {
            let n = +this.props.value;
            this.changeHandler(id, n.toFixed(precisionValue));
        }
    }

    renderActiveField() {
        return <Input
            onChange={(event) => {this.changeHandler(this.props.id, event.target.value)}}
            onBlur={() => this.blurHandler(this.props.id)}
            value={this.props.value}
            type='text'
            autoFocus={true}
        />;
    }
}

export default Number;