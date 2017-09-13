import React from 'react';
import Field from '../field';
import './autoNumber.scss';


class AutoNumber extends Field {
	constructor(props) {
		super(props, 'autonumber');
	}

	renderActiveField() {
		return this.props.recordIdx + 1;
	}

	renderField() {
        return this.props.recordIdx + 1;
	}
}

export default AutoNumber;