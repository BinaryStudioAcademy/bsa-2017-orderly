import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import Field from '../field';
import './checkbox.scss';

class Checkbox extends Field {
    constructor(props){
        super(props, 'checkbox');
        this.state = {
            checked: this.props.value || false
        }
    }

    renderActiveField() {
        return this.renderSelectedField();
    }

    renderSelectedField() {
        if (this.state.checked) {
            return (
                <span className="checkbox-block"
                      onClick={(event) => {
                        this.setState({checked:!this.state.checked}); 
                        this.props.onChangeCheckbox(this.props.id, 'false')}}>
                    <Icon name="checkmark" className="checkbox-checked"/>
                    <Icon name="square outline" className="checkbox-square"/>
                </span>
            )
        }
        return (
            <span className="checkbox-block"
                  onClick={(event) => {
                    this.setState({checked:!this.state.checked}); 
                    this.props.onChangeCheckbox(this.props.id, 'true')}}>
                    <Icon name="square outline" className="checkbox-square"/>
            </span>
        )
    }

    renderField() {
        if (this.state.checked) {
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