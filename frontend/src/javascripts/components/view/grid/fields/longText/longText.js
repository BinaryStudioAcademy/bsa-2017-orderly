import React from 'react';
import { TextArea, Icon } from 'semantic-ui-react';
import Field from '../field';
import './longText.scss';

class LongText extends Field {
    constructor(props){
        super(props, 'long-text');
    }

    renderActiveField() {
        return (
            <TextArea
                onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
                defaultValue={this.props.value}
                type='text'
                autoFocus={this.props.autoFocus}
            />
        );
    }
}

export default LongText;