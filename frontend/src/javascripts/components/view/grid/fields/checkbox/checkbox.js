import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import Field from '../field';
import './checkbox.scss';

class Checkbox extends Field {
    constructor(props){
        super(props, 'checkbox');
    }

    isTrue(value) {
        return (value === 'true');
    }

    renderActiveField() {
        return this.renderSelectedField();
    }

    renderSelectedField() {
        if (this.isTrue(this.props.value)) {
            return (
                <span className="checkbox-block"
                      onClick={(event) => {this.props.onChangeCheckbox(this.props.id, 'false')}}>
                    <Icon name="checkmark" className="checkbox-checked"/>
                    <Icon name="square outline" className="checkbox-square"/>
                </span>
            )
        }
        return (
            <span className="checkbox-block"
                  onClick={(event) => {this.props.onChangeCheckbox(this.props.id, 'true')}}>
                    <Icon name="square outline" className="checkbox-square"/>
            </span>
        )
    }

    renderField() {
        if (this.isTrue(this.props.value)) {
            return (
                <span className="checkbox-block">
                    <Icon name="checkmark" className="checkbox-checked"/>
                </span>
            )
        }
        return (
            <span className="checkbox-block"></span>
        )
    }
}

export default Checkbox;