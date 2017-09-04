import React from 'react';
import Field from '../field';
import './autoNumber.scss';


class AutoNumber extends Field {
	constructor(props) {
		super(props);
	}

	renderActiveField() {
		return <span className='autonumber'
            onBlur={(event) => this.blurHandler(this.props.id, event)}
        >{this.props.recordIdx + 1}</span>;
	}
	renderField() {
		return <span className='autonumber'>{this.props.recordIdx + 1}</span>
	}
}

export default AutoNumber;