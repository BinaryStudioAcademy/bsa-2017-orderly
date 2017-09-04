import React, {Component} from 'react';
import BaseItem from './homePageBaseItem';

let temporaryKey = 0;

class BaseList extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		const props = this.props
		if (this.props.bases) {
			return (
				<div className='base-list'>
					{ this.props.bases && this.props.bases.map(function (base) {
						return (
							<div key={base._id || ++temporaryKey}>
								<BaseItem className="base-list-item"
								          handleClick={props.handleClick}
								          teamId={props.teamId}
								          base={base}
								          menu={props.menu}
								/>
							</div>
						)
					})
					}
					<div className='btn-add-base' onClick={() => props.onNewBaseClick('#234FED', props.teamId)}>+</div>
				</div>
			)
		} else {
			return (<div></div>)
		}

	}
}

export default BaseList
