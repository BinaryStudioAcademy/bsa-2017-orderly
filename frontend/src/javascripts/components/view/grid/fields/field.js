import React, {Component} from 'react';

import './field.scss';

class Field extends Component {

    constructor(props, className){
        super(props);
        this.className = className;

        this.keyPressHandler = this.keyPressHandler.bind(this);
    }

    fieldSelectedClass() {
        return this.props.selected ? ' selected' : '';
    }

    fieldActiveClass() {
        return this.props.active ? ' active' : '';
    }

    renderField() {
        return <div className="table-cell-inner">{this.props.value}</div>;
    }

    renderSelectedField() {
        return this.renderField();
    }

    renderActiveField() {
        return this.props.value;
    }

    keyPressHandler(id, event) {
        if (this.props.autoFocus) {
            this.props.onKeyPress(id, event);
        }
    }

    render() {
        return (
            <div
                className={"table-cell " + this.className + this.fieldSelectedClass() + this.fieldActiveClass()}
                onClick={(event) =>this.props.onSelectRecordItem(this.props.id, event)}
                onKeyPress={(event) => this.keyPressHandler(this.props.id, event)}
                onBlur={(e) => this.props.onBlurField(this.props.id, e)}
                tabIndex="0"
            >
                <div className="table-cell-wrap" onDoubleClick={(event) => this.props.onActivate(this.props.id)}>
                    {this.props.active && this.renderActiveField()}
                    {!this.props.active && this.props.selected && this.renderSelectedField()}
                    {!this.props.active && !this.props.selected && this.renderField()}
                </div>
            </div>
        );
    }
}

export default Field;