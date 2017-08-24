import React from 'react';
import { Input } from 'semantic-ui-react';
import Field from '../field';
import './textLine.scss';

class TextLine extends Field {
    constructor(props){
        super(props, 'text-line');
    }

    renderActiveField() {
        return <Input
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            defaultValue={this.props.value}
            type='text'
            autoFocus={this.props.autoFocus}
        />
    }
}

export default TextLine;
