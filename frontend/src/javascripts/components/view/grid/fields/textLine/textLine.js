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
            onChange={(event) => this.props.onChange(this.props.id, event.target.value)}
            onBlur={(event) => this.props.onBlurComponent(this.props.id)}
            value={this.props.value}
            type='text'
            autoFocus={true}
        />;
    }
}

export default TextLine;