import React from 'react';
import {Input} from 'semantic-ui-react';
import Field from '../field';

import './email.scss';

class Email extends Field {
    constructor(props) {
        super(props, 'email');
    }

    renderActiveField() {
        return <Input
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            defaultValue={this.props.value}
            type='text'
            autoFocus={true}
        />;
    }

    renderSelectedField() {
        return <div className='email' onClick={() => window.open(`mailto:${this.props.value}`, '_self')}>
                   {this.props.value}
               </div>;
    }
}

export default Email;
