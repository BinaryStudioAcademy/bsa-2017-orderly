import React, {Component} from 'react';

import './field.scss';

class Field extends Component {

    constructor(props, className){
        super(props);
        this.className = className;
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

    render() {
        return (
            <div
                className={"table-cell " + this.className + this.fieldSelectedClass() + this.fieldActiveClass()}
                onClick={() => this.props.onSelect(this.props.id)}
                onKeyDown={(event) => this.props.onKeyDown(this.props.id, event)}
                onBlur={() => this.props.onBlurField(this.props.id)}
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