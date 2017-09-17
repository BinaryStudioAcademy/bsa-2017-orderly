import React, {Component} from 'react';

import './field.scss';

class Field extends Component {

    constructor(props, className){
        super(props);
        this.className = className;

        this.keyPressHandler = this.keyPressHandler.bind(this);
    }

    fieldDefaultCellClass() {
        return (this.props.selected || this.props.active) ? '' : ' default-cell';
    }

    fieldSelectedClass() {
        return this.props.selected ? ' selected' : '';
    }

    fieldActiveClass() {
        return this.props.active ? ' active' : '';
    }

    renderField() {
        return this.props.value;
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
        let content = '';
        if (this.props.active) {
            content = this.renderActiveField();
        } else if (!this.props.active && this.props.selected) {
            content = this.renderSelectedField();
        } else if (!this.props.active && !this.props.selected) {
            content = this.renderField();
        }
        return (
            <div className={"table-cell " + this.className + this.fieldSelectedClass() + this.fieldActiveClass()}>
                <div className="table-cell-wrap" onDoubleClick={(event) => this.props.onActivate(this.props.id)}>
                    <div className={"table-cell-inner " + this.fieldDefaultCellClass()}
                         onKeyPress={(event) => this.keyPressHandler(this.props.id, event)}
                         onBlur={() => this.props.onBlurField(this.props.id)}
                         onMouseDown={(event) => this.props.onMouseDownRecordItem(event, this.props.id, this.props.recordIdx, this.props.fieldIdx)}
                         onMouseOver={(event) => this.props.onMouseOverRecordItem(event, this.props.id, this.props.recordIdx, this.props.fieldIdx)}
                         tabIndex="0"
                    >{content}</div>
                </div>
            </div>
        );
    }
}

export default Field;