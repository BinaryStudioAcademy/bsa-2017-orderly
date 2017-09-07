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
        return (
			<div className="table-cell-inner">
				<span className='autonumber'>{this.props.recordIdx + 1}</span>
			</div>
        )
	}
}

export default AutoNumber;