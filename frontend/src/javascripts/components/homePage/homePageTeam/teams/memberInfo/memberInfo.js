import React, {Component} from 'react';

import avatar from '../../../../../../images/avatar.png';
import './memberInfo.scss';
import AppConfig from '../../../../../config';

class MemberInfo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const collaborator = this.props.collaborator || {
				avatar: '',
				firstName: '',
				lastName: '',
				email: '',
			}
		return(
			<div key={collaborator._id} className='popup_mainpart'>
				<img src={ collaborator.avatar ? `${AppConfig.host}/files/${collaborator.avatar}` : avatar}
				     className='popup_logo'/>
				<div className='user_data'>
					<div className='user_name'>{collaborator.firstName} {collaborator.lastName}</div>
					<div className='user_email'>{collaborator.email}</div>
				</div>
			</div>
		)
	}
}

export default MemberInfo;
