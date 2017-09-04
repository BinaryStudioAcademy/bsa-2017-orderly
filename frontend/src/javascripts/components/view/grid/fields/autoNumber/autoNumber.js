import React from 'react';
import Field from '../field';
import './autoNumber.scss';


class AutoNumber extends Field {
	constructor(props) {
		super(props);
	}

	renderActiveField() {
		return (
			<div className="autonumber-wrapper">
				<span className='autonumber'>{this.props.recordIdx + 1}</span>
			</div>
		)
	}
	renderField() {
        return (
			<div className="autonumber-wrapper">
				<span className='autonumber'>{this.props.recordIdx + 1}</span>
			</div>
        )
	}
}

export default AutoNumber;