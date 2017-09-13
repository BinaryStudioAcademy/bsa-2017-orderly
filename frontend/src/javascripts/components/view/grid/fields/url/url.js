import React from 'react';
import { Input } from  'semantic-ui-react';
import Field from '../field';

import './url.scss';

class Url extends Field {
	constructor(props) {
		super(props, 'url');
	}

	renderActiveField() {
		return <Input
			onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
			defaultValue={this.props.value}
			type='text'
			autoFocus={this.props.autoFocus}
		/>
	}

	renderSelectedField() {
		return <div className='url_link'
					onClick={(event) => {
						window.open(`http://${this.props.value}`)
						event.stopPropagation()
				}}>{this.props.value}</div>
	}
}

export default Url;