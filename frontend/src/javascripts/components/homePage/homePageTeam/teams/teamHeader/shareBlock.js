import React from 'react';
import { Modal, Input, Dropdown, Button, Icon } from 'semantic-ui-react';
import R from 'ramda';

import avatar from '../../../../../../images/avatar.png';
import { getRolesForDropdown } from '../../../homePageService';

import Collaborators from './collaborators';

const ShareBlock = ({team, collaborators, showUserPopup, isShowUserPopup, activeShareModal,
	                 changeActiveShareModal}) => (
	<div className='share_block'
	     onClick={() => {
	     	console.log(team._id, 'share click')
		     changeActiveShareModal(team._id)
	     }}
	     >
		<Collaborators collaborators={collaborators}
		               isShowUserPopup={isShowUserPopup}
	                   showUserPopup={showUserPopup}
		               team={team}/>
		<div className='share_btn'>SHARE</div>
		<Modal className='share_modal'
		       onClose={() => {changeActiveShareModal('')}}
		       open={activeShareModal === team._id}
		       closeIcon='close'>
			<Modal.Header className='share_modal_header'>
				{team.name} team sharing
			</Modal.Header>
			<Modal.Content className='share_modal_content'>
				<h5>
					This team has {team.collaborators.length} member{team.collaborators.length > 1 ? 's' : ''}.
					Adding a team member will give them access to all bases within this team.
				</h5>
				<div className='share_modal_main'>

					<div onChange={ (event) => {
						console.log(event.target.value)
					}}
					     className='modal_radio_btn'>
						<input type='radio'
						       defaultChecked
						       value='EMAIL'
						       name='invite'
						       id='byemail'/>
						<label htmlFor='byemail'>Invite by email</label>

						<input type='radio'
						       value='LINK'
						       name='invite'
						       id='bylink'/>
						<label htmlFor='bylink'>Invite by link</label>
					</div>

					<div className='modal_main_email'>
						<div className='modal_main_row'>
							<Input placeholder='Invite more team members via email'/>
							<Dropdown selection
							          className='role_dropdown'
							          defaultValue={'readOnly'}
							          options={getRolesForDropdown()}/>
						</div>
						<div className='modal_main_row'>
							<Input placeholder='Add a message(optional)'
							       disabled={true} />
							<Button primary disabled={true}>Send invite</Button>
						</div>
					</div>
					<div className='modal_main_link'></div>
				</div>
				<div className='team_members'>
					<h4>Team members</h4>
					{R.map(user => {
						if (!R.isEmpty(collaborators)) {
							const collaborator = collaborators[team._id][user.userId]
							return (
							<div className='member_wrapper'>
								<div className='popup_mainpart'>
									<img
										src={ collaborator.avatar ? `http://localhost:2020/files/${collaborator.avatar}` : avatar}
										className='popup_logo'/>
									<div className='user_data'>
										<div
											className='user_name'>{collaborator.firstName} {collaborator.lastName}</div>
										<div className='user_email'>{collaborator.email}</div>
									</div>

								</div>
								<div className='role_settings'>
									<Dropdown selection
									          disabled={user.role === 'owner'}
									          className='role_dropdown'
									          defaultValue={user.role}
									          options={getRolesForDropdown()}/>
									{user.role !== 'owner' ? <Icon className='delete_icon' link name='close'/> : '' }
								</div>
							</div>

							)
						}
					} )(team.collaborators)}


				</div>
			</Modal.Content>
		</Modal>
	</div>
)

export default ShareBlock;