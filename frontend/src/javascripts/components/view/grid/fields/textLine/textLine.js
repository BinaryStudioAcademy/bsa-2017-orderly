import React from 'react';
import { Input } from 'semantic-ui-react';
import Field from '../field';
import './textLine.scss';

let inputValue;

class TextLine extends Field {
    constructor(props){
        super(props, 'text-line');
    }

    renderActiveField() {
        return <Input
            onChange={(event) => { inputValue = event.target.value } }
	        onBlur={(event) => {
	        	if (Boolean(event.target.value)) this.props.onChange(this.props.id, event.target.value)
		        this.props.onBlurComponent(this.props.id)
	        } }
            type='text'
            autoFocus={true}
        />;
    }
}

export default TextLine;