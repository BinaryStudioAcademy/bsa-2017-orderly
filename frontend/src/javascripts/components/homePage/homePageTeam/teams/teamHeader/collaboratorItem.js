import React from 'react';
import { Image } from 'semantic-ui-react';
import avatar from '../../../../../../images/avatar.png';
import { debounce } from 'throttle-debounce';

import MemberInfo from '../memberInfo/memberInfo';
import { getRolesColor } from '../../../homePageService';
import './collabolatorItem.scss';

const hidingPopupStyle = (isShowUserPopup, teamId, userId) => ({
	display: isShowUserPopup[0] === teamId
			 && isShowUserPopup[1] === userId ? 'block' : 'none'
})

const showPopup = debounce(200, (showFunc, settings) => {
	showFunc(settings)
})

const CollaboratorItem = (team, teamUser, collaborator, showUserPopup, isShowUserPopup) => {
	if (collaborator) return (
		<span className='collaboration_item' key={teamUser.userId}>
		<Image src={ collaborator.avatar ? `http://localhost:2020/files/${collaborator.avatar}` : avatar}
		       className='collaborator_logo'
		       onMouseOver={() => {
			       if (isShowUserPopup[0]) showUserPopup(['', ''])
			       else showPopup(showUserPopup, [team._id, teamUser.userId])
		       }}
		       onMouseLeave={() => {
			       showPopup(showUserPopup, ['', ''])
		       }}
		       avatar/>
		<div style={{backgroundColor: 'green'}}	className='logo_user_status'/>
		<div style={hidingPopupStyle(isShowUserPopup, team._id, teamUser.userId)} className='user_info_popup'>
			<MemberInfo collaborator={collaborator} />
			<div className='popup_footer'>
				<div className='footer_status'>
					<div style={{backgroundColor: 'green'}}	className='user_status'/>
					online
				</div>
				<div style={getRolesColor(teamUser.role)} className='footer_role'>{teamUser.role}</div>
			</div>
		</div>
	</span>
	)
}

export default CollaboratorItem;