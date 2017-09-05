import React from 'react';
import {Input} from 'semantic-ui-react';
import Field from '../field';

import './email.scss';

class Email extends Field {
    constructor(props) {
        super(props, 'email');
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    renderActiveField() {
        return <Input
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            defaultValue={this.props.value}
            type='text'
            autoFocus={this.props.autoFocus}
        />;
    }

    renderSelectedField() {
        let mail = this.props.value;
        return <div className='email' onClick={() => {
            if (this.validateEmail(mail)) {
                return window.open(`mailto:${mail}`, '_self');
            }
        }}>
                   {mail}
               </div>;
    }
}

export default Email;
